"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/Button';
import { SlMenu } from 'react-icons/sl';
import { RiCloseLine } from 'react-icons/ri';
import { useInView } from 'motion/react';




export const Navbar = () => {
  const [openMenue, setopenMenue] = useState(false);

  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      })
    }, { threshold: 0.5 })

    sections.forEach((section) => {
      observer.observe(section);
    })

  });
  // اخترت IntersectionObserver لأنه يوفر طريقة فعالة لمراقبة العناصر في العرض، مما يسمح
  //  لي بتحديث حالة التنقل بناءً 
  // على القسم الذي يراه المستخدم حاليًا. هذا يضمن تجربة مستخدم سلسة 
  // وديناميكية حيث يتم تمييز القسم النشط تلقائيًا أثناء التمرير عبر الصفحة.
  // وحدد عن طريقquerySelectorAll السكشنز و entries هو العنصر الذي يتم مراقبته من قبل ال observer و isIntersecting هو خاصية في 
  // ال entries التي تشير إلى ما إذا كان العنصر في العرض أم لا. عندما يكون العنصر في العرض، يتم تحديث حالة 
  // active إلى معرف القسم الحالي، مما يسمح لي بتطبيق تنسيق خاص على رابط التنقل النشط في شريط التنقل. 


  return (
    <div className=' fixed  top-0 left-0 z-50 w-full'>
      <div className='  my-5  flex  justify-around mx-5 py-5 rounded-3xl bg-indigo-700/40 dark:bg-indigo-500/40 backdrop-blur-md font-light'>
        <div>
          <h2 className="bg-linear-to-r from-indigo-700 via-purple-600 to-fuchsia-700 bg-clip-text text-transparent text-2xl">
            Reham Ragab
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className='flex-row flex-wrap gap-3 flex  justify-center'>

            <li>
              <a href="#home" className={active === "home" ? "text-fuchsia-400 text-lg" : "text-white text-lg" }>Home</a>
            </li>
            <li>
              <a href="#about" className={
                active === "about"
                  ? "text-fuchsia-400 text-lg"
                  : "text-white text-lg"
              }> About</a>
            </li>
            <li>
              <a href="#projects" className={
                active === "projects"
                  ? "text-fuchsia-400 text-lg"
                  : "text-white text-lg"
              }>Projects</a>
            </li>
            <li>
              <a href="#skills" className={
                active === "skills"
                  ? "text-fuchsia-400 text-lg"
                  : "text-white text-lg"
              }>Skills</a>
            </li>
            <li>
              <a href="#contact" className={
                active === "contact"
                  ? "text-fuchsia-400 text-lg"
                  : "text-white text-lg"
              }>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex-row flex gap-4">
          <Button />
          <button className="md:hidden" onClick={() => setopenMenue(true)}>
            <SlMenu className="text-white text-2xl" />
          </button>
        </div>

        <div className={`md:hidden fixed top-0 left-0 w-full   bg-indigo-500/40 backdrop-blur-md flex flex-col items-center justify-center gap-3 mb-5 ${openMenue ? "block" : "hidden"} `}>
          <button>
            <RiCloseLine onClick={() => setopenMenue(false)} />
          </button>

          <ul className='flex-col flex-wrap gap-3 flex  justify-center'>

            <li>
              <a href="#home" onClick={() => setopenMenue(false)} className={active === "home" ? "text-fuchsia-400 text-lg" : "text-white text-lg" }>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setopenMenue(false)} className={active === "about" ? "text-fuchsia-400 text-lg" : "text-white text-lg" }>About</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setopenMenue(false)} className={active === "projects" ? "text-fuchsia-400 text-lg" : "text-white text-lg" }>Projects</a>
            </li>
            <li>
              <a href="#skills" onClick={() => setopenMenue(false)} className={active === "skills" ? "text-fuchsia-400 text-lg" : "text-white text-lg" }>Skills</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setopenMenue(false)} className={active === "contact" ? "text-fuchsia-400 text-lg" : "text-white text-lg" }>Contact Us</a>
            </li>
          </ul>
        </div>




      </div>
    </div>
  )
}
