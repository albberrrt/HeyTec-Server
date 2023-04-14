import { CreateUserUseCase } from './useCases/CreateUser/CreateUserUseCase';
import { SqlLiteUserRepository } from "./repositories/implementations/SqlLiteUserRepository";
import { CreateUserController } from './useCases/CreateUser/CreateUserController';

const sqlLiteUserRepository = new SqlLiteUserRepository();

const createUserUseCase = new CreateUserUseCase(
  sqlLiteUserRepository,
);

const createUserController = new CreateUserController(
  createUserUseCase,
);

export { createUserUseCase, createUserController };