import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const collectionName = "User";

const userSchema = new Schema<TUser>(
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

export const User = model<TUser>(collectionName, userSchema);
