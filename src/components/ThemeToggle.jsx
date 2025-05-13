import { useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        document.body.classList.toggle("dark-mode");
        setDarkMode(!darkMode);
    };

    return (
        <button onClick={toggleTheme} className="toggle">
            {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
    );
}

export default ThemeToggle;
