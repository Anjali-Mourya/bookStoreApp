import React, { createContext,useState } from 'react'
import { useContext } from 'react';


export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined)
  return (
    <div>
      <AuthContext.Provider value={[authUser, setAuthUser]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}
export const useAuth = ()=>useContext(AuthContext)