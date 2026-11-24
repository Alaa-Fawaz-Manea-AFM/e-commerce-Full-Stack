"use server";
import { AxiosServer } from "@/lib/axios-server";

export const AddCategoryAction = async (category: string) => {
  try {
    const { data } = await AxiosServer("post", "categories", undefined, {
      category,
    });

    return {
      success: true,
      data: data?.data,
      message: data?.message || "Category added successfully",
    };
  } catch {
    return {
      success: false,
      data: null,
      message: "Oops, Please try again",
    };
  }
};

export const EditCategoryAction = async (id: string, category: string) => {
  try {
    const { data } = await AxiosServer("patch", `categories/${id}`, undefined, {
      category,
    });

    return {
      success: true,
      data: data?.data,
      message: data?.message || "Category updated successfully",
    };
  } catch {
    return {
      success: false,
      data: null,
      message: "Oops, Please try again",
    };
  }
};

export const DeleteCategoryAction = async (id: string) => {
  try {
    const { data } = await AxiosServer(
      "delete",
      `categories/${id}`,
      undefined,
      null,
    );

    return {
      success: true,
      data: data?.data,
      message: data?.message || "Category deleted successfully",
    };
  } catch {
    return {
      success: false,
      data: null,
      message: "Delete failed, reverted changes",
    };
  }
};
