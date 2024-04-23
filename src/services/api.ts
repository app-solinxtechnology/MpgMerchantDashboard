import axios, { AxiosResponse } from "axios";
import { APP_API } from "./enviroment";
export const api = axios.create({
  baseURL: `${APP_API}`,
  headers: {
    "Content-type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("merchantToken") as string;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const LoginApi = (value: { email: string; password: string }) =>
  api.post<AxiosResponse>("/merchant/login", value);

export const listTutorial = () =>
  api.get<AxiosResponse>("/admin/list_tutorials");

export const getFaqList = () => api.get<AxiosResponse>("/admin/list_faqs");

export const createTutorial = () =>
  api.post<AxiosResponse>("/admin/add_tutorial");

export const createFaq = (value: {
  question_en: string;
  answer_en: string;
  question_mm: string;
  answer_mm: string;
  status: string;
}) => api.post<AxiosResponse>("/admin/add_faq", value);

export const listPackage = (params: {
  q?: string;
  page?: string;
  limit?: string;
}) => api.get<AxiosResponse>("/merchant/package/list", { params });

export const AddPackage = (value: { package_name: string; amount: string }) =>
  api.post<AxiosResponse>("/merchant/package/add", value);

export const updatePackage = (value: {
  package_id: string | number;
  package_name: string;
  amount: string;
}) => api.post<AxiosResponse>("/merchant/package/update", value);

export const deletePackage = (value: { package_id: string | number }) =>
  api.post<AxiosResponse>("/merchant/package/delete", value);

export const buyDaily = (params: {
  limit?: string;
  q?: string;
  page?: string;
  date?: string;
}) => api.get<AxiosResponse>("/merchant/report/buy_daily", { params });

export const buyMonthly = (params: {
  limit?: string;
  q?: string;
  page?: string;
  month?: string;
}) => api.get<AxiosResponse>("/merchant/report/buy_monthly", { params });

export const buyYearly = (params: {
  limit?: string;
  q?: string;
  page?: string;
  year?: string;
}) => api.get<AxiosResponse>("/merchant/report/buy_yearly", { params });

export const sellDaily = (params: {
  limit?: string;
  q?: string;
  page?: string;
  date?: string;
}) => api.get<AxiosResponse>("/merchant/report/sell_daily", { params });

export const sellMonthly = (params: {
  limit?: string;
  q?: string;
  page?: string;
  month?: string;
}) => api.get<AxiosResponse>("/merchant/report/sell_monthly", { params });

export const sellYearly = (params: {
  limit?: string;
  q?: string;
  page?: string;
  year?: string;
}) => api.get<AxiosResponse>("/merchant/report/sell_yearly", { params });

export const incomeDaily = (params: {
  limit?: string;
  q?: string;
  page?: string;
  date?: string;
}) => api.get<AxiosResponse>("/merchant/report/daily_income", { params });

export const incomeMonthly = (params: {
  limit?: string;
  q?: string;
  page?: string;
  month?: string;
}) => api.get<AxiosResponse>("/merchant/report/monthly_income", { params });

export const incomeYearly = (params: {
  limit?: string;
  q?: string;
  page?: string;
  year?: string;
}) => api.get<AxiosResponse>("/merchant/report/yearly_income", { params });

export const countTotalApi = () =>
  api.get<AxiosResponse>("/merchant/report/total_income");

export const merchantProfile = () =>
  api.get<AxiosResponse>("/merchant/profile");
