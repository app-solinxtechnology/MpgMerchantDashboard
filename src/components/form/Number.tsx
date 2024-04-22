
import React from "react";
import { useController, UseControllerProps, Control } from "react-hook-form";



export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  message?: undefined | string;
  control: Control<any>;
  password?: boolean;
  className?: string
}

const NumberField = React.memo(({
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

            onKeyDown={(evt) => {
              if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
              }
            }}

            {...field}
            type={"text"}
            className="outline-none w-full h-full bg-[#efefef]"
            {...props}
          />
        </div>
      </div>
      {message && <p className="text-xs  text-red-500">{message}</p>}
    </div>
  );
})

export default NumberField;
