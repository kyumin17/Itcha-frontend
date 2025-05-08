export type post_type = '프로젝트' | '스터디';
export type post_status = '모집중' | '모집완료';

export interface PostProps {
  id: string;
  title: string;
  type: post_type;
  status: post_status;
  deadline: string; // yyyy-mm-dd
  recruit_field: string[];
  tech_stack: string[];
};