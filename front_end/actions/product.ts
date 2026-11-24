"use server";

import { AxiosServer } from "@/lib/axios-server";
import { IForm, IPartialProduct } from "@/types";
import axios, { AxiosResponse } from "axios";
import { cookies } from "next/headers";

export const addProductAction = async (finalProductObj: IPartialProduct) => {
  try {
    const { data } = await AxiosServer(
      "post",
      "products",
      undefined,
      finalProductObj,
    );

    return {
      success: true,
      data: data?.data,
      message: data?.message || "Product added successfully",
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: axios.isAxiosError(error)
        ? error.response?.data?.message || "Oops, Please try again"
        : "Oops, Please try again",
    };
  }
};

export const updateProductAction = async (
  productId: string,
  finalProductObj: Record<string, unknown>,
) => {
  try {
    const { data } = await AxiosServer(
      "patch",
      `products/${productId}`,
      undefined,
      finalProductObj,
    );

    return {
      success: true,
      data: data?.data,
      message: data?.message || "Product Updated successfully",
    };
  } catch {
    return {
      success: false,
      message: "Oops, Please try again",
    };
  }
};

export const handleToogleCartAction = async (productId: string) => {
  try {
    const { data } = await AxiosServer("post", `carts/${productId}`);

    return {
      success: true,
      data: data?.data,
      message: data?.message || "Cart updated successfully",
    };
  } catch {
    return {
      success: false,
      data: null,
      message: "Something went wrong",
    };
    // toast.error("Failed to delete product");
  }
};
