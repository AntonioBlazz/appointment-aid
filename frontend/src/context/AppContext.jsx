import { createContext, useState } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {

const currencySymbol = '$'
const backendUrl ='http://localhost:4000'
const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)

const value = {
   doctors,
   currencySymbol,
   token,setToken,
   backendUrl
}

 return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
 )

}

export default AppContextProvider