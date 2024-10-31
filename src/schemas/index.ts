import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, {
    message: "Username tidak boleh kosong!",
  }),
  password: z.string().min(1, {
    message: "Password tidak boleh kosong!",
  }),
});

export const RegisterSchema = z.object({
  username: z.string().min(1, {
    message: "Username tidak boleh kosong!",
  }),
  password: z.string().min(6, {
    message: "Password tidak boleh kurang dari 6 karakter!",
  }),
  name: z.string().min(1, {
    message: "Nama tidak boleh kosong!",
  }),
});
