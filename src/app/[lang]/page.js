// page.js (Homepage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";
import DonwloadButton from "@/components/buttons/DonwloadButton";
import ServiceCard from "@/components/cards/serviceCard";
import StepCard from "@/components/cards/StepCard";
import AcceptCard from "@/components/cards/AcceptCard";

// HomePage
export default async function HomePage({params}) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div className="home-page">

            {/* Top */}
            <div className="home-page__top">
              <div className="home-page__top--title">
                <h1>{trans.home_page.title1}</h1>
                <h2>{trans.home_page.title2}</h2>
              </div>
              <p>{trans.home_page.subtitle}</p>
              <div className="home-page__download-buttons">
                <DonwloadButton
                  img="/icons/apple.svg"
                  topText={trans.button.app_store}
                  bottomText="App Store"
                />
                <DonwloadButton
                  img="/icons/google.svg"
                  topText={trans.button.google_play}
                  bottomText="Google Play"
                />
              </div>
            </div>

            {/* Meaning */}
            <div className="home-page__meaning">
              <div className="home-page__meaning--content">
                <div className="home-page__meaning--screen">
                  <Image
                    src="/images/screen1.webp"
                    alt="Plata screen 1"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="home-page__meaning--screen-small">
                  <Image
                    src="/images/screen1-small.webp"
                    alt="Plata screen 1"
                    width={1000}
                    height={1000}
                  />
                </div>
                <h2>{trans.home_page.question}</h2>
                <p>{trans.home_page.meaning}</p>
              </div>
            </div>

            {/* Services */}
            <div className="home-page__services">
              <h2>{trans.home_page.services_title_top1} <span>{trans.home_page.services_title_top2}</span></h2>
              <div className="home-page__services--cards">
                <ServiceCard
                  icon="/icons/pay.svg"
                  title={trans.home_page.service_title1}
                  body={trans.home_page.service_body1}
                  color="#272d62"
                />
                <ServiceCard
                  icon="/icons/wallet.svg"
                  title={trans.home_page.service_title2}
                  body={trans.home_page.service_body2}
                  color="#57429B"
                />
                <ServiceCard
                  icon="/icons/document.svg"
                  title={trans.home_page.service_title3}
                  body={trans.home_page.service_body3}
                  color="#F27C2E"
                />
                <ServiceCard
                  icon="/icons/support.svg"
                  title={trans.home_page.service_title4}
                  body={trans.home_page.service_body4}
                  color="#EB383D"
                />
              </div>
            </div>

            {/* Steps */}
            <div className="home-page__steps">
              <Image
                src="/images/pay.webp"
                alt="Steps section background"
                fill
                style={{ objectFit: 'cover', objectPosition: '50% 70%' }}
              />
              <div className="home-page__steps--overlay">
                <h2>{trans.home_page.steps_title}</h2>
                <div className="home-page__steps--cards">
                  <StepCard
                    icon="/icons/download.svg"
                    title={trans.home_page.step_title1}
                    body={trans.home_page.step_body1}
                    color="#F27C2E"
                  />
                  <div className="home-page__steps--down">
                    <Image
                        src="/icons/arrow.svg"
                        alt="Step icon"
                        height={150}
                        width={150}
                    />
                  </div>
                  <StepCard
                    icon="/icons/registration.svg"
                    title={trans.home_page.step_title2}
                    body={trans.home_page.step_body2}
                    color="#EB383D"
                  />
                  <div className="home-page__steps--up">
                    <Image
                        src="/icons/arrow.svg"
                        alt="Step icon"
                        height={150}
                        width={150}
                    />
                  </div>
                  <StepCard
                    icon="/icons/begin.svg"
                    title={trans.home_page.step_title3}
                    body={trans.home_page.step_body2}
                    color="#57429B"
                  />
                </div>
              </div>
            </div>

            {/* Ally */}
            <div className="home-page__ally">
              <div className="home-page__ally--content">
                <div className="home-page__ally--video">
                  <iframe 
                    width="360" 
                    height="640" 
                    src="https://www.youtube.com/embed/KRntP-q_R9s?si=ncLr3uv9cunBRwsa" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="home-page__ally--right">
                  <h2>{trans.home_page.ally_title}</h2>
                  <div className="home-page__ally--card">
                    <h3>{trans.home_page.ally_title1}</h3>
                    <p>{trans.home_page.ally_body1}</p>
                  </div>
                  <div className="home-page__ally--card">
                    <h3>{trans.home_page.ally_title2}</h3>
                    <p>{trans.home_page.ally_body2}</p>
                  </div>
                  <div className="home-page__ally--card">
                    <h3>{trans.home_page.ally_title3}</h3>
                    <p>{trans.home_page.ally_body3}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acceptance */}
            <div className="home-page__acceptance">
              <h2>{trans.home_page.accepted_title}</h2>
              <div className="home-page__acceptance--cards">
                <AcceptCard
                  image="/images/company.webp" 
                  title={trans.home_page.accepted_title1}
                  body={trans.home_page.accepted_body1}
                />
                <AcceptCard
                  image="/images/business.webp" 
                  title={trans.home_page.accepted_title2}
                  body={trans.home_page.accepted_body2}
                />
              </div>
            </div>

            {/* Review */}

            {/* Download */}

            {/* Faq */}
        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}