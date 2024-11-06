import { z } from "zod";

const userValidationSchema = z.object({
  userId: z.string({
    message: "provide your userId",
    required_error: "userId is required.",
  }),
  password: z
    .string({
      message: "provide your password",
      required_error: "password is required.",
    })
    .min(6, { message: "password must be more then 6 char" }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(["admin", "faculty", "student"], {
    required_error: "role must be required.",
    message: "rule doesn't match",
  }),
  status: z.enum(["in-progress", "blocked"], {
    required_error: "status must be required.",
    message: "status doesn't match",
  }),
  isDeleted: z.boolean().optional().default(false),
});

export const validation = { userValidationSchema };
