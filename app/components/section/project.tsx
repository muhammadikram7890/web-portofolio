"use client"
import { useTranslation } from "@/context/translation-context"

export default function Project (){
    const {t} = useTranslation()

    return <div className="w-full min-h-screen flex justify-center items-center border-green-800 border-4">
        
        <p className="text-shadow-amber-300">{t.description}</p>
    </div>
}