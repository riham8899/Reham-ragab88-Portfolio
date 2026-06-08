import React from 'react'
import { FaFacebookSquare , FaLinkedin } from 'react-icons/fa'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <div className=' bg-linear-to-b from-indigo-400 via-purple-600 to-purple-600  dark:bg-none dark:bg-zinc-950 py-5 p-4 flex flex-col gap-5'>
            {/* <h1 className='text-3xl font-bold pb-4'>Reham ragab</h1> */}
            <div>
                <p className=' text-center  max-w-2xl mx-auto text-lg pb-2 '>Frontend Developer passionate about creating beautiful, performant, and accessible web applications using modern technologies.</p>
            </div>

            
            <div className='flex flex-col  items-center gap-5 pt-2'>
                <ul className='flex flex-row  gap-2'>
                    <li>
                        <a href="https://www.linkedin.com/in/reham-ragab-1bb6152b6"
                            className="hover:text-indigo-400  m-auto" target="_blank">
                            <FaLinkedin className="text-3xl text-cyan-300  hover:scale-105 transition-all duration-300  hover:drop-shadow-cyan-100/90 hover:drop-shadow-lg" />

                        </a>
                    </li>
                    <li>
                        <a href=" https://www.facebook.com/share/1CqW9hVkBe/?mibextid=wwXIfr"
                            className="hover:text-indigo-400 transition m-auto" target="_blank">
                            <FaFacebookSquare className="text-3xl text-blue-500 hover:scale-105 transition duration-300   hover:drop-shadow-lg hover:drop-shadow-blue-400/90 " /></a>
                    </li>
                    <li>
                        <a href="mailto:riham.ragab42@gmail.com"
                            className="hover:text-indigo-400 transition m-auto" target="_blank">
                            <MdEmail className="text-3xl text-fuchsia-500 hover:scale-105 transition duration-300 hover:drop-shadow-lg hover:drop-shadow-fuchsia-200/90  " /> </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+201127324144"
                            className="hover:text-indigo-400 transition m-auto " target="_blank">
                            <FaSquareWhatsapp className="text-3xl text-green-400  hover:drop-shadow-[0_0_10px_#22d3ee] hover:scale-105 transition duration-300  " /></a>
                    </li>
                </ul>







                <p className='  m-auto text-sm'> 2026 Reham... Built with ❤️ using Next.js & Tailwind CSs & Shadcn </p>

            </div>


        </div>

    )
}

export default Footer