import Eye from "$Icons/eye";
import EyeOff from "$Icons/eyeOff";
import React, { useState ,useCallback } from "react";
import { useController, UseControllerProps, Control } from "react-hook-form";



export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  message?: undefined | string;
  control: Control<any>;
  password?: boolean;
  className?:string
}

const InputField = React.memo(({
  className,
  label,
  password = false,
  name,
  type,
  message,
  control,
  ...props
}: InputProps & UseControllerProps<any>) => {
  const { field } = useController({
    name,
    control,
  });

  let defaultShowPassword = !password;

  const [showPassword, setShowPassword] = useState<boolean>(defaultShowPassword);

  
  const TogglePassword = useCallback(()=>{
      setShowPassword((prev:boolean)=> !prev )
  },[])

  return (
    <div className="mb-1 grow">
      <div>
        {label && (
          <label className={` ${message && "text-red-600"} text-[14px]  inline-block mb-1 `}>{label}</label>
        )}
        <div
          className={
            `flex h-10 w-full rounded-md outline-none ${message && "border border-red-500"}  border-input bg-[#efefef] grow px-3 py-2 text-sm ${className}`
          }
        >
          <input
             
            {...field}
            type={showPassword ? 'text' : 'password'}
            className="outline-none w-full h-full bg-[#efefef]"
            {...props}
          />
          {password && <span className="inline-block mt-[6px]" onClick={TogglePassword}>{showPassword ? <Eye/> : <EyeOff />}</span>}
        </div>
      </div>
      {message && <p className="text-xs  text-red-500">{message}</p>}
    </div>
  );
})

export default InputField;
