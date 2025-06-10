// page.js (AboutPage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";
import PhilosophyCards from "@/components/cards/PhilosophyCard";
import TeamCard from "@/components/cards/TeamCard";
import AnimatedSection from "@/utils/AnimatedSection";
import { getAssetPath } from "@/utils/getAssetPath";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}/about`; 
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title: trans.metadata?.about.title || 'About Plata | We simplify your financial life',
    description: trans.metadata?.about.description || 'At Plata, we believe in a simpler, safer future. Learn about our mission to build accessible and efficient digital solutions for your everyday life.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// AboutPage
export default async function AboutPage({params}) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div className="about-page">
            
          {/* Intro */}
          
            <div className="about-page__intro">
              <h1 className="sr-only">{trans.about.h1}</h1>
              <div className="about-page__intro--image">
                <Image
                  src={getAssetPath("/images/team.webp")}
                  alt="Plata team picture"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '50% 55%' }}
                  priority
                />
              </div>
              <div className="about-page__intro--overlay"></div>
              <div className="about-page__intro--wrapper">
                <div className="about-page__intro--content">
                  <div className="about-page__intro--video">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/gPI7LnQAkCI?si=J63UUNceTEdFVZzw"
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
          <div className="about-page__philosophy">
            <AnimatedSection animation="slideFromLeft">
              <PhilosophyCards
                icon={getAssetPath("/icons/mission.svg")}
                title={trans.about.mission_title}
                body={trans.about.mission_body}
                color="#F27C2E"
              />
            </AnimatedSection>
            <AnimatedSection animation="slideFromRight">
              <PhilosophyCards
                icon={getAssetPath("/icons/vision.svg")}
                title={trans.about.vision_title}
                body={trans.about.vision_body}
                color="#EB383D"
              />
            </AnimatedSection>
            <AnimatedSection animation="slideFromBottom">
              <PhilosophyCards
                icon={getAssetPath("/icons/values.svg")}
                title={trans.about.values.values_title}
                listItems={[ 
                  trans.about.values.values1,
                  trans.about.values.values2,
                  trans.about.values.values3,
                  trans.about.values.values4,
                ]}
                color="#57429B"
              />
            </AnimatedSection>
          </div>

          {/* Team */}
          <div className="about-page__team">
              <div className="about-page__team--text">
                <h2>{trans.about.members_title1} <span>{trans.about.members_title2}</span></h2>
                <p>{trans.about.members_body}</p>
              </div>
              <div className="about-page__team--cards">
                <AnimatedSection animation="slideFromLeft">
                  <TeamCard
                    image={getAssetPath("/images/plata-member1.webp")}
                    name="Doménica Becerra"
                    role={trans.about.roles.role1}
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromBottom">
                  <TeamCard
                    image={getAssetPath("/images/plata-member2.webp")}
                    name="Martín Bastidas"
                    role={trans.about.roles.role2}
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromRight">
                  <TeamCard
                    image={getAssetPath("/images/plata-member3.webp")}
                    name="Thomas López"
                    role={trans.about.roles.role3}
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