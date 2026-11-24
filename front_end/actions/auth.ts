"use server";

import { AxiosServer } from "@/lib/axios-server";
import { IForm } from "@/types";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";

export const signUp_LogIn_Action = async (
  form: IForm,
  title: "Log In" | "Sign Up",
) => {
  try {
    const endpoint = title === "Log In" ? "auth/login" : "auth/signup";

    const response = await AxiosServer("post", endpoint, undefined, form);
    await saveAuthCookies(response);

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

export const logOutAction = async () => {
  try {
    await AxiosServer("post", "auth/logout");
    const cookieStore = await cookies();
    cookieStore.delete("accessToken");

    return {
      success: true,
      message: "Logged out successfully",
    };
  } catch {
    return {
      success: false,
      message: "Logout failed, please try again.",
    };
  }
};
// export const logInAction = async (form: IForm) => {
//   try {
//     const response = await AxiosServer("post", "auth/login", undefined, form);
//     await saveAuthCookies(response);

//     return {
//       success: true,
//       data: response.data.data || null,
//     };
//   } catch {
//     return {
//       success: false,
//       data: null,
//       message: "Oops, Sign Up, Please try again..",
//     };
//   }
// };

const saveAuthCookies = async (response: AxiosResponse) => {
  const cookiesStore = await cookies();
  response.headers["set-cookie"]?.forEach((cookie: string) => {
    const [pair] = cookie.split(";");
    const [name, ...value] = pair.split("=");

    if (["accessToken"].includes(name)) {
      cookiesStore.set(name, value.join("="), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });
    }
  });
};

export const getUserDataAction = async () => {
  try {
    const { data } = await AxiosServer("get", "auth/me");

    return {
      success: true,
      data: data?.data || null,
    };
  } catch {
    return {
      data: null,
      success: false,
    };
  }
};
