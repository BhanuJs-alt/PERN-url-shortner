import prisma from "../config/prisma.ts";
import { Prisma } from "@prisma/client";

export const findByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};
export const findById = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};
export const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data,
  });
};
