"use client"
import { useTranslation } from "@/context/translation-context"

export default function About(){
    const {t} = useTranslation();
    return <div className="w-full min-h-screen flex justify-center items-center border-y-amber-500 border-8">
        <p className="text-shadow-amber-300">{t.description}</p>
    </div>
}