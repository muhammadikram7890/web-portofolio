"use client"
import { useTranslation } from "@/context/translation-context"
import Image from "next/image"

export default function Home (){
    const {t} = useTranslation()

    return <div className="w-full min-h-screen flex justify-center items-center px-6">
        <div className="flex justify-between w-full items-center space-x-2">
            <div className="flex justify-center items-center ">
              <p className="text-blue-900 text-2xl text-center">Muhammad Ikram</p>
            </div>
            <div>
               
                <p className="text-shadow-amber-300">{t.description}</p>
                <Image src={"/"} alt="" width={25} height={25} />
            </div>
        </div>
    </div>
}