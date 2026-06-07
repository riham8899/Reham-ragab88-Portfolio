"use client";
import { Moon, SunMedium } from 'lucide-react'
import { useTheme } from 'next-themes';
import React from 'react'

const Button = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className='flex flex-row'>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ?
                    <Moon /> : <SunMedium />}

                    {/* /عملنا  use them 
                    من النكست  ثيم علشان نستخدمها ف تغير الحاله و كمان  غيرنا الثيم  الحاله مع الاون كليك
                     وكمان استخدمنا ايف  كونديشن عشان نغير الايكون  */}

            </button>


        </div>
    )
}

export default Button