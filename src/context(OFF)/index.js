import React from 'react';

const themeContext = React.createContext({
    themeColor: '#878787',
    changeThemeColor: () => null,
});

export const ThemeConsumer = themeContext.Consumer;
