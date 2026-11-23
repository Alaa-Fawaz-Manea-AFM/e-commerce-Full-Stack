import axios from "axios";

export const DOMAIN: string = `${process.env.NEXT_PUBLIC_API_URL}`;

const AxiosClient = axios.create({
  baseURL: DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosClient;
