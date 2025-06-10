// Footer.js (Server component)

import { getCurrentYear } from "@/utils/date";
import { getTranslations } from "@/locales/translations";
import Image from "next/image";
import FooterContact from "./FooterContact";
import FoldButton from "./buttons/FoldButton";
import FooterItems from "./FooterItems";
import { getAssetPath } from "@/utils/getAssetPath";

export default async function Footer({lang}) {

    // Year
    const currentYear = getCurrentYear();

    // Translations
    const locale = lang || 'en';
    const trans = await getTranslations(locale);

    // Footer items
    const footItems = [
        { label: trans.navbar.home, href: "/" },
        { label: trans.navbar.about, href: "/about" },
        { label: trans.navbar.contact, href: "/contact" },
    ];

    return (
        <div className="footer">
            <div className="footer__content">

                {/* Footer top*/}
                <div className="footer__top">
                    <div className="footer__image">
                        <Image
                            src={getAssetPath("/images/plata-logo-white.png")}
                            alt="Logo Plata"
                            priority
                            width={200}
                            height={200}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="footer__contact">
                        <h3>{trans.footer.contact}</h3>
                        <div className="footer__contact--items">
                            <FooterContact
                                src={getAssetPath("/icons/whatsapp.svg")}
                                text='(+593) 983687629'
                                medium='593983687629'
                                type='whatsapp'
                                trans={trans.footer}
                            />
                            <FooterContact
                                src={getAssetPath("/icons/email.svg")}
                                text='contactos@plata.com'
                                medium="contactos@plata.com"
                                type="email"
                                trans={trans.footer}
                            />
                        </div>
                    </div>
                    <div className="footer__address">
                        <h3>{trans.footer.address}</h3>
                        <p>Av. República del Salvador y Suiza, Quito</p>
                    </div>
                    <div className="footer__time">
                        <h3>{trans.footer.time}</h3>
                        <div>
                            <p>{trans.footer.mon_fry}: 7:00 - 22:00</p>
                            <p>{trans.footer.saturday}: 8:00 - 22:00</p>
                            <p>{trans.footer.sunday}: 8:00 - 15:00</p>
                        </div>
                    </div>
                    <div className="footer__nav">
                        <h3>{trans.footer.links}</h3>
                        <FooterItems 
                            footItems={footItems} 
                            trans={trans.footer}
                        />
                    </div>
                </div>

                {/* Footer line*/}
                <hr className="footer__line"/>

                {/* Footer bottom*/}
                <div className="footer__bottom">
                    <small className="footer__bottom--text">© {currentYear} {trans.footer.copyright}</small>
                    <div className="footer__social">
                        <FoldButton 
                            src={getAssetPath("/icons/insta.svg")}
                            alt="Plata Instagram"
                            text="Instagram"
                            link=""
                        />
                        <FoldButton 
                            src={getAssetPath("/icons/x.svg")}
                            alt="Plata Twitter"
                            text="X - Twitter"
                            link=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}