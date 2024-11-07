import { model, Schema } from "mongoose";
import { TUser, TUserModel } from "./user.interface";

const collectionName = "User";

const userSchema = new Schema<TUser, TUserModel>(
  {
    userId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "faculty", "student"],
      },
      message: `{VALUE} is not valid role`,
    },
    status: {
      type: String,
      enum: {
        values: ["in-progress", "blocked"],
        message: `{VALUE} is not valid Status`,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// creating a static method by email
userSchema.statics.isUserExist = async function (userId: string) {
  const existingUser = await User.findOne({ userId }).select("+password");
  return existingUser;
};

export const User = model<TUser, TUserModel>(collectionName, userSchema);
