"use client";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import Link from "next/link";

export default function Navbar() {
  const { t, locale } = useTranslation();
    return(
        <div className="fixed w-full">
            <div className="flex justify-between items-center mt-4 px-6">
                <div className="">
                <ul className="flex space-x-8">
                <li>{t.home}</li>
                    <li>{t.about}</li>
                    <li>{t.projects}</li>
                    <li>{t.skills}</li>
                    <li>{t.contact}</li>
                </ul>
                </div>
                    <div className="flex space-x-2">
                    <Link href="/id" className={locale === "id" ? "font-bold" : ""}>ID</Link>
                    <Link href="/en" className={locale === "en" ? "font-bold ml-4" : ""}>EN</Link>
                    <Sun></Sun>
                    <Moon></Moon>
                    </div>
            </div>
        </div>
    )
}