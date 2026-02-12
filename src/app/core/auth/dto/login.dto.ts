export interface ILoginRequestDto {
  email: string;
  password: string;
}

export interface ILoginResponseDto {
  success: boolean;
  data: {
    accessToken: string;
  };
}
