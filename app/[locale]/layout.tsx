import { translations } from "@/lib/translations";
import { TranslationProvider } from "@/context/translation-context";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = translations[locale as "id" | "en"];

  return (
    <TranslationProvider t={t} locale={locale}>
      {children}
    </TranslationProvider>
  );
}