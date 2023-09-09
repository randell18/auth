import React, { useState } from 'react'
import Auth from './Auth'
import { createContext } from 'react' 

export const AuthContext = createContext();

const App = () => {
    const [theme, setTheme] = useState('light');
  return (
    <AuthContext.Provider value={theme}>
        <Auth />
    </AuthContext.Provider>
  )
}

export default App