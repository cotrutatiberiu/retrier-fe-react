export type LoginRequestPayload = {
  email: string | null;
  password: string | null;
}

export type RegisterRequestPayload = Profile & {
  password: string | null;
};

export type LoginResponsePayload = {
  accessToken: string;
}

export type Profile = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  role: string | null;
};
