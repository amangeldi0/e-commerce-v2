import { useEffect, useState } from 'react';

enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

export const LOCAL_STORAGE_THEME_KEY: string = 'theme';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export function useTheme(): useThemeResult {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme!(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return <useThemeResult>{
        theme,
        toggleTheme
    };
}
