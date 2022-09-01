export type TUser = {
  id: number;
  login: string;
  firstName: string;
  middleName: string;
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
