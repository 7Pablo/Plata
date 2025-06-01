// page.js (AboutPage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";

// AboutPage
export default async function AboutPage(params) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div>
            About
        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}