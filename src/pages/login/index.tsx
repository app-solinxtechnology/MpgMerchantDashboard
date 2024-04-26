import InputField from "../../components/form/InputFiled";

import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import { LoginApi } from "#Services";
import lazyToast from "$components/alert";
import { errorMessageResolver } from "../../utils";
import { Button } from "@material-tailwind/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from '../../images/bg-white.png';



const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email("Invalid email (example : username@gmail.com)"),
    password : z.string().min(1,{message:"password is required"})
});

type LoginSchema = z.infer<typeof LoginSchema>;

const Login = () => {
  const { control, handleSubmit ,formState:{errors} } = useForm<LoginSchema>({
    mode: "onChange",
    resolver : zodResolver(LoginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });
  const navigate = useNavigate();

  const { loading,runAsync } = useRequest(LoginApi, {
    manual: true,
  });

  const onSubmit = async (_data: FieldValues) => {
    lazyToast(
      runAsync({ email: _data.email, password: _data.password }),
      {
        loading: "verifying",
        success: (res) => {
           localStorage.setItem("merchantToken",res.data.data.accessToken)
           navigate('/dashboard')
            
          //@ts-ignore
          return res?.data?.message;
        },
        error: (err) => errorMessageResolver(err),
      }
    );
  };

  return (
    <main className=" h-screen  ">
      <div className="grid grid-cols-1 h-full   lg:grid-cols-3">
        <div className="flex flex-col h-screen items-center justify-around   ">

          <div className="">

            <div>
              <div className=" flex items-center justify-center text-4xl font-[600]">
                <span>MPG Payment</span>
              </div>

           
            </div>

          </div>
          <div className="flex justify-center">
                <img
                  src={logo}
                  className="w-auto max-h-[210px]  rounded-full"
                  alt=""
                />
              </div>
          <div className=" bg-white shadow-lg p-8 w-[380px] cursor-pointer rounded-md">
            <div className="flex justify-center">

              <p className=" mb-1 text-lg font-bold">Merchant Login</p>
            </div>
            <form className=" gap-6" onSubmit={handleSubmit(onSubmit)}>
              <InputField
                message={errors.email?.message} 
                label="Email"
                placeholder="Enter your username"
                className="w-96  "
                name={"email"}
                control={control}
              />
              <InputField
                label="Password"
                message={errors.password?.message}
                placeholder="Enter your password"
                className="w-96  border-grey border-[1px]"
                password
                name={"password"}
                control={control}
              />
              <Button
                disabled={loading}
                type={"submit"}
                placeholder={"button"}
                className="bg-[#3a86ff] mt-2 w-full "
              >
                Sign In
              </Button>
            </form>
          </div>

        </div>
        <div className="h-screen   lg:col-span-2 bg-[url('/woman.jpg')] bg-cover img-bg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </main>
  );
};

export default Login;
