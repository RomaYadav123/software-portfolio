import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ToggleSwitch = () => {
  const [theme, setTheme] = useState("null");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="px-4 w-[10%]">
      <button
        className="bg-green-200 p-2 cursor-pointer rounded-3xl w-[100%] flex justify-center"
        onClick={handleThemeSwitch}
      >
        {theme === "light" ? <MdWbSunny /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ToggleSwitch;
