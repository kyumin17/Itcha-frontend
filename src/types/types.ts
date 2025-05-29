export type post_type = '프로젝트' | '스터디';
export type post_status = '모집중' | '모집완료';

export interface SignupProps {
  username: string;
  password: string;
  name: string;
  email: string;
};

export interface CheckIdProps {
  username: string;
  is_taken: boolean;
};

export interface CheckMailProps {
  email: string;
  available: boolean;
};

export interface SignupResultProps {
  state: 'success' | 'fail';
  error: string;
};

export interface AuthProps {
  access: string;
  refresh: string;
}

export interface SigninResultProps {
  error: string;
  ok: boolean;
  status: number;
  url: null | string;
};

export interface PostsProps {
  count: number;
  next: null | string;
  previous: null | string;
  results: string[];
};

export interface FieldProps {
  id: number;
  name: string;
};

export interface PostCreateProps {
  type: 'project' | 'study';
  title: string;
  content: string;
  deadline: string;
  is_completed: boolean;
  fields: FieldProps[];
};

export interface MemberProps {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  github?: string;
  is_active?: boolean;
  is_staff?: boolean;
};