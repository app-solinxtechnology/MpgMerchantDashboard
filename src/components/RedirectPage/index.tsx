import React from 'react'
import { Navigate,  } from 'react-router-dom';

const RedirectPage = ({children}:{children:React.ReactNode}) => {
    const token = localStorage.getItem("merchantToken");
  
    return token ? <Navigate to={"/dashboard"}/> : children
}

export default RedirectPage
