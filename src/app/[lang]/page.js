// page.js (Homepage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";
import DonwloadButton from "@/components/buttons/DonwloadButton";
import ServiceCard from "@/components/cards/serviceCard";
import StepCard from "@/components/cards/StepCard";
import AcceptCard from "@/components/cards/AcceptCard";
import Button from "@/components/buttons/Button";
import FaqAccordion from "@/components/FaqAccordion";
import AnimatedSection from "@/utils/AnimatedSection";
import { getAssetPath } from "@/utils/getAssetPath";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}`; 
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title: trans.metadata?.home.title || 'Plata | Your all-in-one digital wallet',
    description: trans.metadata?.home.description || 'Manage your payments, tickets, insurance, and personal documents from your phone. Fast, secure, and hassle-free. Everything in one place, always within reach.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// HomePage
export default async function HomePage({params}) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div className="home-page">

            {/* Top */}
            <AnimatedSection animation="smallBounceFromTop">
              <div className="home-page__top">
                <div className="home-page__top--title">
                  <h1>{trans.home_page.title1}</h1>
                  <h2>{trans.home_page.title2}</h2>
                </div>
                <p>{trans.home_page.subtitle}</p>
                <div className="home-page__download-buttons">
                  <DonwloadButton
                    img={getAssetPath("/icons/apple.svg")}
                    topText={trans.button.app_store}
                    bottomText="App Store"
                  />
                  <DonwloadButton
                    img={getAssetPath("/icons/google.svg")}
                    topText={trans.button.google_play}
                    bottomText="Google Play"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Meaning */}
              
                <div className="home-page__meaning">
                <AnimatedSection animation="slideFromBottom">
                  <div className="home-page__meaning--content">
                    <div className="home-page__meaning--screen">
                      <Image
                        src={lang == 'es' ? getAssetPath("/images/screen1.webp") : getAssetPath("/images/screen1-en.webp")}
                        alt="Plata screen 1"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="home-page__meaning--screen-small">
                      <Image
                        src={lang == 'es' ? getAssetPath("/images/screen1-small.webp") : getAssetPath("/images/screen1-small-en.webp") }
                        alt="Plata screen 1"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <h2>{trans.home_page.question}</h2>
                    <p>{trans.home_page.meaning}</p>
                  </div>
                  </AnimatedSection>
                </div>

            {/* Services */}
            <div className="home-page__services">
              <h2>{trans.home_page.services_title_top1} <span>{trans.home_page.services_title_top2}</span></h2>
              <div className="home-page__services--cards">
                <AnimatedSection animation="slideFromLeft">
                  <ServiceCard
                    icon={getAssetPath("/icons/pay.svg")}
                    title={trans.home_page.service_title1}
                    body={trans.home_page.service_body1}
                    color="#272d62"
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromLeft">
                  <ServiceCard
                    icon={getAssetPath("/icons/wallet.svg")}
                    title={trans.home_page.service_title2}
                    body={trans.home_page.service_body2}
                    color="#57429B"
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromRight">
                  <ServiceCard
                    icon={getAssetPath("/icons/document.svg")}
                    title={trans.home_page.service_title3}
                    body={trans.home_page.service_body3}
                    color="#F27C2E"
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromRight">
                  <ServiceCard
                    icon={getAssetPath("/icons/support.svg")}
                    title={trans.home_page.service_title4}
                    body={trans.home_page.service_body4}
                    color="#EB383D"
                  />
                </AnimatedSection>
              </div>
            </div>

            {/* Steps */}
            <div className="home-page__steps">
              <Image
                src={getAssetPath("/images/pay.webp")}
                alt="Steps section background"
                fill
                style={{ objectFit: 'cover', objectPosition: '50% 70%' }}
              />
              <div className="home-page__steps--overlay">
                <h2>{trans.home_page.steps_title}</h2>
                <AnimatedSection animation="fallingBounceFromTop">
                  <div className="home-page__steps--cards">
                    <StepCard
                      icon={getAssetPath("/icons/download.svg")}
                      title={trans.home_page.step_title1}
                      body={trans.home_page.step_body1}
                      color="#F27C2E"
                    />
                    <div className="home-page__steps--down">
                      <Image
                          src={getAssetPath("/icons/arrow.svg")}
                          alt="Step icon"
                          height={150}
                          width={150}
                      />
                    </div>
                    <StepCard
                      icon={getAssetPath("/icons/registration.svg")}
                      title={trans.home_page.step_title2}
                      body={trans.home_page.step_body2}
                      color="#EB383D"
                    />
                    <div className="home-page__steps--up">
                      <Image
                          src={getAssetPath("/icons/arrow.svg")}
                          alt="Step icon"
                          height={150}
                          width={150}
                      />
                    </div>
                    <StepCard
                      icon={getAssetPath("/icons/begin.svg")}
                      title={trans.home_page.step_title3}
                      body={trans.home_page.step_body2}
                      color="#57429B"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Ally */}
            <div className="home-page__ally">
              <AnimatedSection animation="fadeInScale">
                <div className="home-page__ally--content">
                  <div className="home-page__ally--video">
                    <iframe
                      width="360"
                      height="640"
                      src="https://www.youtube.com/embed/3sujrokrxy4"
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
              </AnimatedSection>
            </div>

            {/* Acceptance */}
            <div className="home-page__acceptance">
              <h2><span>{trans.home_page.accepted_title_top1}</span> {trans.home_page.accepted_title_top2}</h2>
              <div className="home-page__acceptance--cards">
                <AnimatedSection animation="slideFromLeft">
                  <AcceptCard
                    image={getAssetPath("/images/company.webp")}
                    title={trans.home_page.accepted_title1}
                    body={trans.home_page.accepted_body1}
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideFromRight">
                  <AcceptCard
                    image={getAssetPath("/images/business.webp" )}
                    title={trans.home_page.accepted_title2}
                    body={trans.home_page.accepted_body2}
                  />
                </AnimatedSection>
              </div>
            </div>

            {/* Review */}
            <div className="home-page__review">
              <AnimatedSection animation="fadeInUp">
                <div className="home-page__review--content">
                  <div className="home-page__review--image">
                    <Image
                      src={getAssetPath("/images/review.svg")}
                      alt="Review icon"
                      height={300}
                      width={300}
                    />
                  </div>
                  <div className="home-page__review--right">
                    <div className="home-page__review--text">
                      <h2>{trans.home_page.review_title}</h2>
                      <p>{trans.home_page.review_body}</p>
                    </div>
                    <Button disabled={true}>
                      {trans.button.review}
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Download */}
            <AnimatedSection animation="rotateIn">
              <div className="home-page__download">
                <div className="home-page__download--screen">
                  <Image
                    src={lang == 'es' ? getAssetPath("/images/screen2.webp") : getAssetPath("/images/screen2-en.webp")}
                    alt="Plata screen 1"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="home-page__download--top">
                  <div className="home-page__download--text">
                    <h3>{trans.home_page.download_title}</h3>
                    <p>{trans.home_page.download_body}</p>
                  </div>
                  <div className="home-page__download-buttons">
                    <DonwloadButton
                      img={getAssetPath("/icons/apple.svg")}
                      topText={trans.button.app_store}
                      bottomText="App Store"
                    />
                    <DonwloadButton
                      img={getAssetPath("/icons/google.svg")}
                      topText={trans.button.google_play}
                      bottomText="Google Play"
                    />
                  </div>
                </div>
                <div className="home-page__download--bottom">
                  <div className="home-page__download--text">
                    <h3>{trans.home_page.contact_title}</h3>
                    <p>{trans.home_page.contact_body}</p>
                  </div>
                  <Button
                    route="contact"
                  >
                    {trans.button.contact}
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Faq */}
            <div className="home-page__faq">
              <h2>{trans.home_page.faq_title1} <span>{trans.home_page.faq_title2}</span></h2>
              <div className="home-page__faq--items">
                <AnimatedSection animation="fadeInUp">
                  <FaqAccordion
                    questions={trans.home_page.questions}
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