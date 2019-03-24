enum Roles {
  Guest,
  User,
  Admin
}
// type Roles = (typeof Roles)[keyof typeof Roles];
export { Roles };

export class User {


  Id: number;
  Email: string;
  Username: string;
  Password: string;
  Role: Roles;

  constructor(id?: number, email?: string, username?: string, password?: string, role?: Roles) {
    this.Id = id;
    this.Email = email;
    this.Username = username;
    this.Password = password;
    this.Role = role;
  }
}
