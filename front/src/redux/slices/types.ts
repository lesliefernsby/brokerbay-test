export type TUser = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type TUserError = {
  detail: string;
  status: number;
  title: string;
  type: string;
};
