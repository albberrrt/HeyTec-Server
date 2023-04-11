import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserUseCase } from './CreateUserUseCase';
import { z } from 'zod';


export class CreateUserController {
  constructor(
    private CreateUserUseCase: CreateUserUseCase,
  ) {}

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {


    try{
      await this.CreateUserUseCase.execute({
        username,
        email,
        password,
        avatarUrl: '',
        CPF: undefined
      });

      return reply.status(201).send();
    } catch (err) {
      return reply.code(400).send({
        message: err.message || 'unexpected error.'
      });
    }
  }
}