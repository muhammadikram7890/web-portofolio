"use client"
import { useTranslation } from "@/context/translation-context"

export default function Home (){
    const {t} = useTranslation()

    return <div>
        <p className="text-shadow-amber-300">{t.description}</p>
    </div>
}