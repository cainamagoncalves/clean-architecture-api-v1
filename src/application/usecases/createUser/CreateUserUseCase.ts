import { ICreateUserDTO } from "../../dto/user/CreateUserDto";
import { UsersRepository } from "../../../domain/repositories/implementations/UsersRepository";

export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    this.usersRepository.create(data);
  }
}