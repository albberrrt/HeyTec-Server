import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

const prisma = new PrismaClient({
  log: ["query"],
});

export class SqlLiteUserRepository implements IUsersRepository {

  async findByEmail(email: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: { email },
    })
    return user ? true : false;
  }

  async save(user: User): Promise<void> {
    await prisma.user.create({
      data: {
        id: user.id,
        userName: user.username,
        email: user.email,
        password: user.password,
        avatarUrl: user.avatarUrl
      }
    });
  }
}