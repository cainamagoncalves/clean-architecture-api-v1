import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository; // SINGLETON -> 

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  } // SINGLETON

  create(user: Omit<User, 'id'>): void {
    const newUser = new User(user);

    this.users.push(newUser)
    // return new Promise((resolve) => resolve())
  };

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return new Promise((resolve) => resolve(user));
  };

  async findById(id: string): Promise<User> {
    const user = this.users.find(user => user.id === id);

    return new Promise((resolve) => resolve(user));
  }

  findAll(): User[] {
    return this.users;
  }

  async update(id: string, data: Omit<User, 'id' | 'createdAt'>): Promise<void> {
    const newUsersAfterUpdate = this.users.map(user => {
      return user.id === id ? { ...user, ...data } : user
    })

    this.users = newUsersAfterUpdate

    return new Promise((resolve) => resolve());
  }

  async delete(id: string): Promise<void> {
    const newUsersAfterDelete = this.users.filter(user => user.id !== id);

    this.users = newUsersAfterDelete;

    return new Promise((resolve) => resolve());
  };

}
