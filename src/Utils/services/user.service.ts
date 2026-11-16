import { axiosInstance } from "@/Utils/api/axios-instance";
import type { CreateUserPayload, User } from "@/types/user/user.types";

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axiosInstance.get<User[]>("/users");

  return data;
};

export const createUser = async (payload: CreateUserPayload): Promise<User> => {
  const { data } = await axiosInstance.post<User>("/users", {
    ...payload,
    address: {
      city: "",
      street: "",
      number: 0,
      zipcode: "",
    },
  });

  return data;
};
