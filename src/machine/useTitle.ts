import React from 'react'
import { create } from 'zustand'

export type MachineName = {
   title : string
   handleTitle : (name:string , icons?: string | React.ReactNode)=> void 
   icon : string |  React.ReactNode
}

export const useTitle = create<MachineName>((set) => ({
    title:"",
    icon: "",
    handleTitle : (name ,icon)=>(set({title:name,icon:icon}))
}))