import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (userData: TUser) => {
  if (await User.isUserExist(userData.userId)) {
  }
  const result = await User.create();
  return result;
};

export const userService = { createUserIntoDB };
