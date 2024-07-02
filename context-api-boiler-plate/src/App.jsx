import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState(themeMode);

  const darkTheme = () => {
    setThemeMode('dark');
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(function toggleTheme(){
    if(themeMode === 'light') darkTheme();
    else lightTheme();
  },[themeMode]);
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>

    </ThemeProvider>
    
  )
}

export default App
