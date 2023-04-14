import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import fastifyCookie from '@fastify/cookie';
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { generateToken } from "./src/services/generateToken";
require('dotenv').config();

async function bootstrap() {

    const prisma = new PrismaClient({
        log: ["query"],
      });
      

    const fastify = Fastify({
        logger: true,
    });

    await fastify.register(fastifyCookie, {
        secret: process.env.COOKIE_SECRET
    })

    await fastify.register(cors, {
        origin: true,
        credentials: true,
    });

    fastify.get("/helloworld", async () => {
        const string = "Hello World";

        return { string };
    })

    fastify.post("/user/signup", async (request: FastifyRequest, reply: FastifyReply) => {
        const createUserBody = z.object({
            username: z.string(),
            email: z.string().email(),
            password: z.string(),
        });
    
        try {
            
            const { username, email, password } = createUserBody.parse(request.body);
    
            const firstLetterOfUsername = username.charAt(0).toLowerCase();
            const avatarUrl = "/profile-images/" + firstLetterOfUsername + ".png";
    
            const userId = await prisma.user.create({
                data: {
                    userName: username,
                    email: email,
                    password: password,
                    avatarUrl: avatarUrl,
                },
                select: {
                    id: true,
                }
            })
    
            const token = generateToken({ userId })

            reply.send({ token: token });
            reply.status(201);
    
        } catch (error) {
            console.log("error: " + error);
            reply.status(500).send({ status: "error" });
        }
    })

    await fastify.listen({ port: 7777, host: '192.168.2.163' /*host: "0.0.0.0"*/ });
        
}

bootstrap();