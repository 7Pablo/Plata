// page.js (ContactPage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";
import ContactCard from "@/components/cards/ContactCard";
import SocialButton from "@/components/buttons/SocialButton";

// ContactPage
export default async function ContactPage({params}) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div className="contact-page">
            <div className="contact-page__hero">
              <div className="contact-page__image">
                <Image
                  src="/images/support.webp"
                  alt="Plata team picture"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '50% 70%' }}
                  priority
                />
              </div>
              <div className="contact-page__overlay">
                <div className="contact-page__text">
                  <h1>{trans.contact.title}</h1>
                  <div className="contact-page__text--bottom">
                    <p>{trans.contact.body1}</p>
                    <p>{trans.contact.body2}</p>
                    <p>{trans.contact.body3}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-page__wrapper">
              <div className="contact-page__cards">
                <ContactCard
                  icon="/icons/phone-blue.svg"
                  title={trans.contact.phone}
                  body="(+593) 983687629"
                />
                <ContactCard
                  icon="/icons/email-blue.svg"
                  title={trans.contact.email}
                  body="contactos@plata.com"
                />
                <ContactCard
                  icon="/icons/location-blue.svg"
                  title={trans.contact.address}
                  body="Av. República del Salvador y Suiza, Quito"
                />
                <ContactCard
                  icon="/icons/time.svg"
                  title={trans.contact.address}
                  body={`Lun - Vie: 7:00 - 22:00\nSábado: 8:00 - 22:00\nDomingo: 8:00 - 15:00`}
                />
                <SocialButton
                  icon="/icons/insta-blue.svg"
                  title="Instagram"
                  link=""
                />
                <SocialButton
                  icon="/icons/x-blue.svg"
                  title="X - Twitter"
                  link=""
                />
              </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}