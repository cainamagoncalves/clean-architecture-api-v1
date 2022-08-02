import { User } from "../../domain/entities/User";

export interface IUsersRepository {
  create(user: Omit<User, 'id'>): void;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: string, data: Omit<User, 'id'>): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): User[];
}