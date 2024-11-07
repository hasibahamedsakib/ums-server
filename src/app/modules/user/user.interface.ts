import { Model } from "mongoose";

export type TUser = {
  userId: string;
  password: string;
  needsPasswordChange: boolean;
  role: "admin" | "faculty" | "student";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};
export interface TUserModel extends Model<TUser> {
  isUserExist(userId: string): Promise<TUser>;
}
