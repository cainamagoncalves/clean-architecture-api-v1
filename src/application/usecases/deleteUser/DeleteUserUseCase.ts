import { UsersRepository } from "../../../domain/repositories/implementations/UsersRepository";

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute(id: string): Promise<void> {
    const userNotExists = await this.usersRepository.findById(id)

    if (!userNotExists) {
      throw new Error("User not found");
    }

    await this.usersRepository.delete(id);
  }
}