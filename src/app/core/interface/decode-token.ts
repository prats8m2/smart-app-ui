export interface IDecodeToken {
  id: string;
  name: string;
  email: string;
  isFirstLogin: boolean;
  exp: number;
  iat: number;
}
