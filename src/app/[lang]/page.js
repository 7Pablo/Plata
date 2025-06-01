// page.js (Homepage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";

// HomePage
export default async function HomePage(params) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div>
            Home
        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}