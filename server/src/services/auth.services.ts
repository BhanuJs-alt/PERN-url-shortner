import { createToken } from "../utils/jwt.ts";
import { findByEmail, createUser } from "../repositories/user.repository.ts";
import bcrypt from "bcrypt";
import { RegisterData } from "../types/auth.Types.ts";

export const register = async (data: RegisterData) => {
  const existingUser = await findByEmail(data.email);

  if (existingUser) {
    throw new Error("Email already exist");
  }
  const hashedPassword = await bcrypt.hash(
    data.password,
    Number(process.env.BCRYPT_SALT_ROUNDS),
  );

  const newUser = await createUser({
    name: data.name,
    email: data.email,
    password: hashedPassword,
  });
  const token = createToken(newUser.id);
  return {
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    },
    token,
  };
};
