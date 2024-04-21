import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); 

    useEffect(() => {
        document.body.className = theme;  
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const ThemeToggle = () => {
    const { toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme} className="p-2 bg-gray-800 text-white">
            Toggle Theme
        </button>
    );
};
