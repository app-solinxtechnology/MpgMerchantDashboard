
import { create } from 'zustand'

export type MachineGetField = {
    Field : {} ;
   handleField : (value:any)=> void 

}

export const useGetField = create<MachineGetField>((set) => ({
     Field:{},
     handleField : (Field)=>(set({Field }))
}))