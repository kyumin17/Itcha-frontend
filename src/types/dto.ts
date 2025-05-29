export interface SigninDTO {
  error: string;
  ok: boolean;
  status: number;
  url: null | string;
};

export interface SignupDTO {
  state: 'success' | 'fail';
  error: string;
};

export interface CheckIdDTO {
  username: string;
  is_taken: boolean;
};

export interface CheckMailDTO {
  email: string;
  available: boolean;
};

export interface MemberDTO {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  github?: string;
  is_active?: boolean;
  is_staff?: boolean;
};