export class User {
  Id: number;
  Email: string;
  Username: string;
  Password: string;

  constructor(id?: number, email?: string, username?: string, password?: string) {
    this.Id = id;
    this.Email = email;
    this.Username = username;
    this.Password = password;
  }
}
