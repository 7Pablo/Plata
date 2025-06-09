// page.js (AboutPage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";
import PhilosophyCards from "@/components/cards/PhilosophyCard";
import TeamCard from "@/components/cards/TeamCard";

// AboutPage
export default async function AboutPage({params}) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div className="about-page">
            
          {/* Intro */}
          <div className="about-page__intro">
            <div className="about-page__intro--image">
              <Image
                src="/images/team.webp"
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
            <PhilosophyCards
              icon="/icons/mission.svg"
              title={trans.about.mission_title}
              body={trans.about.mission_body}
              color="#F27C2E"
            />
            <PhilosophyCards
              icon="/icons/vision.svg"
              title={trans.about.vision_title}
              body={trans.about.vision_body}
              color="#EB383D"
            />
            <PhilosophyCards
              icon="/icons/values.svg"
              title={trans.about.values.values_title}
              listItems={[ 
                trans.about.values.values1,
                trans.about.values.values2,
                trans.about.values.values3,
                trans.about.values.values4,
              ]}
              color="#57429B"
            />
          </div>

          {/* Team */}
          <div className="about-page__team">
              <div className="about-page__team--text">
                <h2>{trans.about.members_title1} <span>{trans.about.members_title2}</span></h2>
                <p>{trans.about.members_body}</p>
              </div>
              <div className="about-page__team--cards">
                <TeamCard
                  image="/images/plata-member1.webp"
                  name="Doménica Becerra"
                  role={trans.about.roles.role1}
                />
                <TeamCard
                  image="/images/plata-member2.webp"
                  name="Martín Bastidas"
                  role={trans.about.roles.role2}
                />
                <TeamCard
                  image="/images/plata-member3.webp"
                  name="Thomas López"
                  role={trans.about.roles.role3}
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