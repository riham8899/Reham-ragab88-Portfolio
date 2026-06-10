"use client";
import { Badge } from "@/components/ui/badge"

import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link";
import { FaGithub, FaLocationArrow } from "react-icons/fa";

export function CardPro() {
    return (
        <div className="flex flex-col md:flex-row  gap-10 mt-10 justify-center items-center w-full p-5 ">

            <Card className="relative mx-auto  max-w-sm  dark:bg-purple-50 bg-body pt-0 overflow-hidden hover:scale-105 transition duration-300">
                <div className="absolute inset-0 z-30   aspect-video  pointer-events-none overflow-hidden" />
                <Image
                    src="/Screenshot 2026-05-09 021728.png"
                    alt="pro 1"
                    className="relative z-20 aspect-video w-full object-cover brightness-100 hover:scale-110 duration-500 transition-all  overflow-hidden"
                    width={500}
                    height={300}
                />

                <CardHeader>
                    <div className="text-center flex flex-col gap-2 mb-2 m-auto">
                        <CardTitle className="text-center text-xl">Fresh Cart E-Commerce</CardTitle>

                        <CardAction className="flex flex-row gap-2">

                            <Badge className=" text-xs p-3 border drop-shadow-md drop-shadow-blue-400  border-blue-400 bg-linear-to-t from-blue-300 to-indigo-500">Next.js</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md drop-shadow-blue-400  border-blue-400 bg-linear-to-t from-cyan-400 to-indigo-500">context</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md drop-shadow-blue-400  border-blue-400 bg-linear-to-t from-emerald-400 to-indigo-500">TypeScript</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md border-blue-400  drop-shadow-blue-400  bg-linear-to-t from-fuchsia-500 to-indigo-500">RealApi</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md border-blue-400   drop-shadow-blue-400 bg-linear-to-t from-purple-400 to-indigo-500">Tailwind</Badge>

                        </CardAction>

                        <CardDescription className="text-black  text-base font-sans">
                            It is a fully integrated and responsive online store with
                            a real application programming interface (API)
                            <br />

                            Do you like this?
                        </CardDescription>
                    </div>



                </CardHeader>

                <CardFooter className="flex flex-row justify-between  ">
                    <Link rel="stylesheet" href="https://github.com/riham8899/testrepo" className="flex flex-row gap-1 " target="_blank">  <FaGithub className="text-2xl hover:text-3xl hover:scale-110 duration-500 transition-all text-black " /></Link>


                    <Link rel="stylesheet" href="https://testrepo-phi-liard.vercel.app/" className="flex items-center gap-1 text-ms hover:text-md hover:scale-110 duration-500 transition-all text-black " target="_blank"> live Demo <FaLocationArrow className="text-sm text-black" /> </Link>
                </CardFooter>
            </Card>

            {/* card 2 pro */}

            <Card className="relative mx-auto  max-w-sm pt-0 bg-body dark:bg-purple-50 overflow-hidden hover:scale-105 transition duration-300">
                <div className="absolute inset-0 z-30   aspect-video  pointer-events-none overflow-hidden" />
                <Image
                    src="/Screenshot 2026-05-10 015808.png"
                    alt="pro 1"
                    className="relative z-20 aspect-video w-full object-cover brightness-100 hover:scale-110 duration-500 transition-all  overflow-hidden"
                    width={500}
                    height={300}
                />

                <CardHeader >
                    <div className="text-center flex flex-col  gap-2 mb-2 m-auto ">
                        <CardTitle className="text-center text-xl">social Application</CardTitle>

                        <CardAction className="flex flex-row gap-1">

                            <Badge className=" text-xs p-3 border drop-shadow-md drop-shadow-blue-400  border-blue-400 bg-linear-to-t from-blue-300 to-indigo-500">React</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md drop-shadow-blue-400  border-blue-400 bg-linear-to-t from-cyan-400 to-indigo-500">context</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md drop-shadow-blue-400  border-blue-400 bg-linear-to-t from-emerald-400 to-indigo-500">React-query</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md border-blue-400  drop-shadow-blue-400  bg-linear-to-t from-fuchsia-500 to-indigo-500">RealApi</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md border-blue-400   drop-shadow-blue-400 bg-linear-to-t from-purple-400 to-indigo-500">Tailwind</Badge>

                        </CardAction>

                        <CardDescription className="text-black  text-base font-sans">
                            This social networking app lets you create your own account,
                            share photos and posts, and edit them using React.
                        </CardDescription>
                    </div>



                </CardHeader>

                <CardFooter className="flex flex-row justify-between ">
                    <Link rel="stylesheet" href="https://github.com/riham8899/social-app" className="flex flex-row gap-1 " target="_blank">  <FaGithub className="text-2xl hover:text-3xl hover:scale-110 duration-500 transition-all text-black " /></Link>


                    <Link rel="stylesheet" href="https://social-app-eta-beige.vercel.app/login" target="_blank" className="flex items-center gap-1 text-ms hover:text-md hover:scale-110 duration-500 transition-all text-black "> live Demo <FaLocationArrow className="text-sm text-black" /> </Link>
                </CardFooter>
            </Card>

            <Card className="relative mx-auto  max-w-sm pt-0 bg-body dark:bg-purple-50 overflow-hidden hover:scale-105 transition duration-300">
                <div className="absolute inset-0 z-30   aspect-video  pointer-events-none overflow-hidden" />
                <Image
                    src="/Screenshot 2026-06-11 012604.png"
                    alt="pro 1"
                    className="relative z-20 aspect-video w-full object-cover brightness-100 hover:scale-110 duration-500 transition-all  overflow-hidden"
                    width={500}
                    height={300}
                />

                <CardHeader >
                    <div className="text-center flex flex-col  gap-2 mb-2 m-auto ">
                        <CardTitle className="text-center text-xl">Weather Website</CardTitle>

                        <CardAction className="flex flex-row gap-1 justify-center m-auto">

                            <Badge className=" text-xs p-3 border drop-shadow-md drop-shadow-blue-400  border-blue-400 bg-linear-to-t from-blue-300 to-indigo-500">JavaScript</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md drop-shadow-blue-400  border-blue-400 bg-linear-to-t from-cyan-400 to-indigo-500">Bootstrap</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md border-blue-400  drop-shadow-blue-400  bg-linear-to-t from-fuchsia-500 to-indigo-500">RealApi</Badge>
                            <Badge className=" text-xs p-3 border drop-shadow-md border-blue-400  drop-shadow-blue-400  bg-linear-to-t from-fuchsia-500 to-indigo-500">Css</Badge>



                        </CardAction>

                        <CardDescription className="text-black  text-base font-sans">
                            This weather website provides real-time forecasts and detailed information about weather conditions in various locations.
                        </CardDescription>
                    </div>



                </CardHeader>

                <CardFooter className="flex flex-row justify-between ">
                    <Link rel="stylesheet" href="https://github.com/riham8899/weather-website" className="flex flex-row gap-1 " target="_blank">
                        <FaGithub className="text-2xl hover:text-3xl hover:scale-110 duration-500 transition-all text-black " />
                    </Link>


                    <Link rel="stylesheet" href="https://weather-website-amber-chi.vercel.app" className="flex items-center gap-1 text-ms hover:text-md hover:scale-110 duration-500 transition-all text-black " target="_blank">
                        live Demo <FaLocationArrow className="text-sm text-black" />
                    </Link>
                </CardFooter>
            </Card>

        </div>


    )
}
