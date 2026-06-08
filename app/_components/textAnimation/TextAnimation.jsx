"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const TextAnimation = () => {
    const text = [" Front-End Developer", "React", "Next.js"]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % text.length)
        }, 2000);

        return () => clearInterval(interval);


    }, [text.length])

    

    return (
        <div className=" relative h-16  w-full ">
            <AnimatePresence mode="wait">
                <motion.h2
                    key={currentIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute text-4xl text-blue-900  dark:text-blue-600 font-bold mt-4 z-10"
                >
                    {text[currentIndex]}
                </motion.h2>
            </AnimatePresence>

        </div>
    )
}

export default TextAnimation