import React from 'react';
export const themes = {
    dark: {
        background: 'black',
        foreground: 'white'
    },
    light: {
        background: 'white',
        foreground: 'black'
    }
};

export const ThemeContext = React.createContext(
    {
        theme: themes.dark,
        toogleTheme: () => {},
    }
);

