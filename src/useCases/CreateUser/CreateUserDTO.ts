export interface ICreateUserRequestDTO {
  username: string;
  email: string;
  password: string;
  avatarUrl: string;
  CPF: string | undefined;
}