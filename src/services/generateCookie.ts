import type { FastifyReply } from 'fastify'

interface CookieOptions {
    httpOnly: boolean;
    secure: boolean;
    path: string;
    expires: Date;
    sameSite: boolean;
}

export async function generateCookie(reply: FastifyReply, token: string): Promise<void> {
    const cookieOptions: CookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: new Date(Date.now() + 3600 * 1000), // expires in 1 hour
        sameSite: true,
    };

    reply.setCookie("heytec.token", token, cookieOptions);
    reply.status(201).send({ status: "success" });
}