import { SignupDTO } from '@/types/dto';
import http from './http';

const signup = async (username: string, password: string, name: string, email: string) => {
  let response: SignupDTO = {
    state: 'fail',
    error: '',
  };

  if (!(username && password && name && email)) {
    response.error = '모든 필드를 입력해주세요';
    return response;
  }

  const form = {
    username: username,
    password: password,
    name: name,
    email: email,
  };

  try {
    await http.post('/api/auth/signup', form);
    response.state = 'success';
  } catch (error: any) {
    response.error = error.response?.data || error.message;
  }

  return response;
};

export default signup;