import { User } from "../../../domain/entities/User";
import { UsersRepository } from "../../../domain/repositories/implementations/UsersRepository";

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute(id: string, data: Omit<User, 'id' | 'createdAt'>) {
    await this.usersRepository.update(id, data);
  }
}