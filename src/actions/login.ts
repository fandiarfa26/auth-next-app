"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Ada kesalahan pada kolom!" };
  }

  return { success: "Login berhasil!" };
};
