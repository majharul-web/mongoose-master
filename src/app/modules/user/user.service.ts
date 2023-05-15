import { IUser } from "./user.interface";
import { User } from "./user.model";

export const getUsersFromDb = async (): Promise<IUser[] | []> => {
  const data = await User.find();
  return data;
};

export const getUserFromDb = async (payload: string): Promise<IUser | object> => {
  const data = await User.find({ id: payload }, { name: 1, contactNo: 1 });
  return data;
};

export const saveUserInDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  console.log(user.fullName());
  await user.save();
  return user;
};
export const getAdminUsersFromDb = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
