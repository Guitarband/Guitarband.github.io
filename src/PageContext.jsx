import React, {createContext, useContext} from "react";


const PageContext = createContext()

export const PageProvider = ({ children }) => {
    const [value, setValue] = React.useState('home')
    return(
        <PageContext.Provider value={{value, setValue}}>
            {children}
        </PageContext.Provider>
    )

}

export const usePageContext = () => useContext(PageContext)