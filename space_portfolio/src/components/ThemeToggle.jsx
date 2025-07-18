import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {cn} from '../lib/utils';

const ThemeToggle = () => {
  const [isDarkMode, setIsDArkMode] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if(storedTheme === 'dark'){
        setIsDArkMode(true);
        document.documentElement.classList.add("dark");
    }else{
         setIsDArkMode(false);
        document.documentElement.classList.remove("dark");

    }
   
  }, [])
  


  const toggleTheme =()=>{
    if(isDarkMode){
        localStorage.setItem("theme","light");
        document.documentElement.classList.remove("dark");
        setIsDArkMode(false);
    }else{
        document.documentElement.classList.add('dark');
        localStorage.setItem("theme","dark");
        setIsDArkMode(true);
    }
  }


  return <button
  className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
    "focus:outline-hidden cursor-pointer"
  )}
   onClick={toggleTheme} >{isDarkMode ? <Sun
    className="h-6 w-6 text-yellow-300" /> :
     <Moon 
     className="h-6 w-6 text-blue-900"
     />}</button>;
};

export default ThemeToggle;
