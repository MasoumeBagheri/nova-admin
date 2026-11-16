import { axiosInstance } from "@/Utils/api/axios-instance";
import type { Product } from "@/types/product/product.types";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>("/products");

  return data;
};

export const createProduct = async (
  product: Omit<Product, "id" | "rating">,
): Promise<Product> => {
  const { data } = await axiosInstance.post<Product>("/products", product);

  return data;
};
