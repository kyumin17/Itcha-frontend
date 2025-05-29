import { Field } from './common';

export interface PostForm {
  type: 'project' | 'study';
  title: string;
  content: string;
  deadline: string;
  is_completed: boolean;
  fields: Field[];
};