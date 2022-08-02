import { Request, Response, Router } from "express";
import { createUserController } from "../application/usecases/createUser";
import { deleteUserController } from "../application/usecases/deleteUser";
import { listUsersController } from "../application/usecases/listUsers";
import { updateUserController } from "../application/usecases/updateUser";

const userRoutes = Router();

userRoutes.post("/user", (request: Request, response: Response) => {
  createUserController.handle(request, response);
});

userRoutes.get("/user", (request: Request, response: Response) => {
  listUsersController.handle(request, response);
});

userRoutes.delete("/user/:id", (request: Request, response: Response) => {
  deleteUserController.handle(request, response);
});

userRoutes.put("/user/:id", (request: Request, response: Response) => {
  updateUserController.handle(request, response);
})

export { userRoutes };