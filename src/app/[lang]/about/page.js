// page.js (AboutPage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";

// AboutPage
export default async function AboutPage({params}) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div className="about-page">
            
          {/* Intro */}
          <div className="about-page__intro">
            <Image
              src="/images/team.webp"
              alt="Plata team picture"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 55%' }}
              priority
            />
            <div className="about-page__intro--overlay">
              <div className="about-page__intro--content">
                <div className="about-page__intro--video">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/DyDfgMOUjCI?si=E02aovApHO4e4SZ4" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>
                </div>
                <div className="about-page__intro--about">
                  <h2>{trans.about.title1} <span>{trans.about.title2}</span></h2>
                  <p>{trans.about.body}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}

          {/* Team */}

        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}