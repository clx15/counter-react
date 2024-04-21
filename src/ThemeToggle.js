import React from 'react';
import { useTheme } from './ThemeContext'; 

export const ThemeToggle = () => {
    const { toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme} className="m-2 p-2 bg-gray-800 text-white rounded">
            Toggle Theme
        </button>
    );
};
