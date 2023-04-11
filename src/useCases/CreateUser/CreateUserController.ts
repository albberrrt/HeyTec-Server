import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserUseCase } from './CreateUserUseCase';
interface CustomFastifyRequest extends FastifyRequest {
  body: {
    username: string;
    email: string;
    password: string;
  };
}
export class CreateUserController {
  constructor(
    private CreateUserUseCase: CreateUserUseCase,
  ) {}

  async handle(request: CustomFastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { username, email, password } = request.body;

    try{
        await this.CreateUserUseCase.execute({
          username,
          email,
          password,
          avatarUrl: '',
          CPF: undefined
        });

        return reply.status(201).send();
      } catch (err:any) {
        return reply.code(400).send({
          message: err.message || 'unexpected error.'
        });
      }
  }
}

//Devo Implementar a validação de dados usando zod(CreateUserSchema e pipipipopop) e middleware(Estudar sobre Middleware)