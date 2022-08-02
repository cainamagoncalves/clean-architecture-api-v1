import { User } from "../../../domain/entities/User";
import { UsersRepository } from "../../../domain/repositories/implementations/UsersRepository";

export class ListUsersUseCase {

  constructor(private usersRepository: UsersRepository) { }

  async execute(): Promise<User[]> {
    const users = new Promise<User[]>((resolve) => resolve(this.usersRepository.findAll()))

    return users
  }
}