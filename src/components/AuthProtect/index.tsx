import { api } from "#Services";
import SmallLoader from "$Icons/smallLoader";
import { useAuth } from "$machine/useAuth";
import { Navigate } from "react-router-dom";

api.interceptors.response.use(
  (response) => {
     if(response.data.code === 403){
      localStorage.removeItem("merchantToken");
      setTimeout(()=>{window.location.pathname = "/login";},50)
     }
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.data.code === 403 && !originalRequest._retry) {
  
      originalRequest._retry = true;
      localStorage.removeItem("merchantToken");
      setTimeout(()=>{window.location.pathname = "/login";},2000)
      api.defaults.headers.common["Authorization"] = `Bearer `;
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

const AuthProtect = ({ children }: { children: React.ReactNode }) => {
  const { success } = useAuth((store) => store);
  const token = localStorage.getItem("merchantToken") as string;

  const isCheck = !token && !success;

  if (isCheck) {
    return <Navigate to={"/login"} />;
  } else if (token && success) {
    return <SmallLoader/>;
  } else {
    return children;
  }
};

export default AuthProtect;
    