"use server";

import { AxiosServer } from "@/lib/axios-server";

export const getUserData = async () => {
  try {
    const { data } = await AxiosServer("get", "auth/me");

    return {
      success: true,
      data: data?.data,
    };
  } catch {
    return {
      data: null,
      success: false,
    };
  }
};
