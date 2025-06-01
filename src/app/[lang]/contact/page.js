// page.js (ContactPage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";

// ContactPage
export default async function ContactPage(params) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div>
            Contact
        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}