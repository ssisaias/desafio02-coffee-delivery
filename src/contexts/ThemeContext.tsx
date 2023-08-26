import { darkTheme, defaultTheme } from "../styles/themes/default";
import { createContext, useState } from "react";

interface ThemeContextType {
    changeTheme: (theme: string) => void
}

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeContextProviderProps{
    children: React.ReactNode;
}

export function ThemeContextProvider({children}: ThemeContextProviderProps){
    const [, setTheme] = useState(defaultTheme);

    function changeTheme(theme: string){
        if(theme !== 'dark'){
            setTheme(defaultTheme);
        } else{
            setTheme(darkTheme);
        }
    }

    return (
        <ThemeContext.Provider value={{
            changeTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}