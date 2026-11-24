"use server";
import { AxiosServer } from "@/lib/axios-server";

export const AdminDashboardCountsAction = async () => {
  try {
    const response = await AxiosServer(
      "post",
      "admin-dashboard",
      undefined,
      null,
    );

    return {
      success: true,
      data: response.data?.data || null,
    };
  } catch {
    return {
      success: false,
      data: null,
      message: "Request failed, please try again.",
    };
  }
};

export const AdminDashboardProductsAction = async (api: string) => {
  try {
    const response = await AxiosServer("get", api, undefined, null);

    return {
      success: true,
      data: response.data?.data || null,
    };
  } catch {
    return {
      success: false,
      data: null,
      message: "Request failed, please try again.",
    };
  }
};
