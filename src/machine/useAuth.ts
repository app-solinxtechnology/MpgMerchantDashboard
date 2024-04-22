import { create } from "zustand";

export type TypeBooleanAuth =  {
    success : boolean;
    handleToken : (token:boolean)=> void
}

export const useAuth = create<TypeBooleanAuth>((set) => ({
    success: false,
    handleToken : (token)=>(set({success:token}))
  }));
  