import { v4 as uuid } from "uuid";

export class User {
  public readonly id: string;

  public name: string;
  public password: string;
  public email: string;
  public createdAt?: Date;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, {
      ...props,
      createdAt: props.createdAt ?? new Date()
    });

    if (!id) {
      this.id = uuid();
    }
  }
}