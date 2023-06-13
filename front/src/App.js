import React, { useEffect, useState } from 'react'
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RTLLayout from "layouts/rtl";
import { Route, Redirect } from "react-router-dom";
const App = () => {
    const [user,setUser]=useState(localStorage.getItem("user"))
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    useEffect(()=>{
     if(user){
         setIsLoggedIn(true)
     }else {
        setIsLoggedIn(false)

     }
        
    },[user,isLoggedIn])
 
    if(isLoggedIn){
        return (
            <>
             <Route path={`/admin`} component={AdminLayout}  />
            <Route path={`/rtl`} component={RTLLayout} />
            <Redirect from='/' to='/admin' />
            </>
        )
    }else { 
        return (
        <>
        <Route  path={`/auth`} component={AuthLayout} />
        <Redirect from='/' to='/auth/sign-in' />
        </>
        )
    }
 
    return (
    <>

                
     </>
  )
}

export default App