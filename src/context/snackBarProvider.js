import React, { createContext, useState } from "react"

const SnackBarContext = createContext(null)

const SnackBarProvider = ({children}) =>{

    const [snackBarOpen,setSnackBarOpen] = useState(false)
    const [snackBarMessage,setSnackBarMessage] = useState("")
    const [snackBarId, setSnackBarId] = useState(null)

    const handleShowSnackBar = (productId,message)=>{
        setSnackBarOpen(true);
        setSnackBarId(productId)
        setSnackBarMessage(message) 
        setTimeout(() => {
            setSnackBarId(productId)
            setSnackBarOpen(false);
        }, 3000);
    }

 
    return (
        <SnackBarContext.Provider value={{snackBarOpen,handleShowSnackBar,snackBarMessage,snackBarId}}>
            {children}
        </SnackBarContext.Provider>
    )
}
export  { SnackBarContext, SnackBarProvider };