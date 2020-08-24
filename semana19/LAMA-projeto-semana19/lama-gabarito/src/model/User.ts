export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: UserRole
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPassword(): string {
    return this.password;
  }

  public getEmail(): string {
    return this.email;
  }

  public getRole(): UserRole {
    return this.role;
  }

  public static toUser(data?: any): User | undefined {
    return (
      data &&
      new User(
        data.id,
        data.name,
        data.email,
        data.password,
        User.toUserRole(data.role)
      )
    );
  }

  public static toUserRole(data?: string): UserRole {
    switch (data) {
      case "NORMAL":
        return UserRole.NORMAL;
      case "ADMIN":
        return UserRole.ADMIN;
      default:
        throw new Error("Invalid User Role");
    }
  }
}

export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
