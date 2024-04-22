
import { create } from 'zustand'
export type IgnoreName = {
    mass: string | Date,
   handleMass : (item:Date | string)=> void 
   handleClearMass: ()=>void
}

export const useIgnore = create<IgnoreName>((set) => ({
    mass: "",
    handleMass : (item )=>(set({mass:item})),
    handleClearMass : ()=>(set({mass:""}))
}))