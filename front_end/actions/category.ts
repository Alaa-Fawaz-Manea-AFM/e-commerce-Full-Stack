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

// export const updateProductAction = async (
//   productId: string,
//   finalProductObj: Record<string, unknown>,
// ) => {
//   try {
//     const { data } = await AxiosServer(
//       "patch",
//       `products/${productId}`,
//       undefined,
//       finalProductObj,
//     );

//     return {
//       success: true,
//       data: data?.data,
//       message: data?.message || "Product Updated successfully",
//     };
//   } catch {
//     return {
//       success: false,
//       message: "Oops, Please try again",
//     };
//   }
// };

// export const handleToogleCartAction = async (productId: string) => {
//   try {
//     const { data } = await AxiosServer("post", `carts/${productId}`);

//     return {
//       success: false,
//       data: data,
//       message: data?.message || "Cart updated successfully",
//     };
//   } catch {
//     return {
//       success: false,
//       data: null,
//       message: "Something went wrong",
//     };
//     // toast.error("Failed to delete product");
//   }
// };
