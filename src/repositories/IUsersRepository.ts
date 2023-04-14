// IUserRepository é a interface que define o formato que o Repository de Usuários vai ter.

import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<boolean>;
    save(User: User): Promise<void>;
}