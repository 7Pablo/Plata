// page.js (ContactPage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";
import ContactCard from "@/components/cards/ContactCard";
import SocialButton from "@/components/buttons/SocialButton";
import AnimatedSection from "@/utils/AnimatedSection";
import { getAssetPath } from "@/utils/getAssetPath";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}/contact`; 
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title: trans.metadata?.contact.title || 'Contact | Get in touch with Plata',
    description: trans.metadata?.contact.description || 'Have questions, suggestions, or want to learn more about Plata? Reach out to us and see how we can help.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

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
                  src={getAssetPath("/images/support.webp")}
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
                <AnimatedSection animation="slideFromLeft">
                  <ContactCard
                    icon={getAssetPath("/icons/phone-blue.svg")}
                    title={trans.contact.phone}
                    body="(+593) 983687629"
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromRight">
                  <ContactCard
                    icon={getAssetPath("/icons/email-blue.svg")}
                    title={trans.contact.email}
                    body="contactos@plata.com"
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromLeft">
                  <ContactCard
                    icon={getAssetPath("/icons/location-blue.svg")}
                    title={trans.contact.address}
                    body="Av. República del Salvador y Suiza, Quito"
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromRight">
                  <ContactCard
                    icon={getAssetPath("/icons/time.svg")}
                    title={trans.contact.address}
                    body={`Lun - Vie: 7:00 - 22:00\nSábado: 8:00 - 22:00\nDomingo: 8:00 - 15:00`}
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromLeft">
                  <SocialButton
                    icon={getAssetPath("/icons/insta-blue.svg")}
                    title="Instagram"
                    link=""
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromRight">
                  <SocialButton
                    icon={getAssetPath("/icons/x-blue.svg")}
                    title="X - Twitter"
                    link=""
                  />
                </AnimatedSection>
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