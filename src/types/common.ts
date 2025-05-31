export interface Field {
  id: number;
  name: string;
};

export interface RecruitReq {
  field: null | number;
  count: number;
}