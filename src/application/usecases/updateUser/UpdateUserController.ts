import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) { }

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, password } = request.body;

    await this.updateUserUseCase.execute(id, {
      name,
      email,
      password
    })

    return response.status(200).send();
  }
}