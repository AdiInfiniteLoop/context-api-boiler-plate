import { createContext } from "react";


/* 1.Create a Context + initialize as objects
   2.Make a Provider + wrap <App/> 
   3.Make a Custom Hook + return the useContext() directly*/


export const themeContext = createContext({
    themeMode: 'light',
    darkTheme : () => {},
    lightTheme : () => {}
});

export const ThemeProvider = themeContext.Provider;

export   function useTheme() {
    return useContext(themeContext);
}
