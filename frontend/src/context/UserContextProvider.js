import  { createContext, useContext } from 'react'
const userContext=createContext({
  user:'',
  setUser:()=>{}
})

export const UserContextProvider=userContext.Provider


export const useDisplayUser=()=>{
  return useContext(userContext)
}