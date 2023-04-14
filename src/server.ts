import { FastifyReply, FastifyRequest } from 'fastify';
import { app } from "./app";
import { createUserController } from "./index";

app.post("/user/signup", (request, response) => {
  return createUserController.handle(request, response)
})

app.listen({ port: 7777, host: '192.168.2.163' /*host: "0.0.0.0"*/});
console.log("Server running on port 7777, JAEEEE!!!");
