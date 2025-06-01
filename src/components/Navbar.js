// Navbar.js (Server Component)

import { getTranslations } from "@/locales/translations";
import NavbarButton from "./buttons/NavbarButton";
import NavbarItems from "./NavbarItems";
import Button from "./buttons/Button";
import HamDropdown from "./buttons/HamDropdown";

export default async function Navbar({ lang }) {

    // Translations
    const locale = lang || 'en';
    const trans = await getTranslations(locale);

    // Navbar items
    const navItems = [
        { label: trans.navbar.home, href: "/" },
        { label: trans.navbar.about, href: "/about" },
        { label: trans.navbar.contact, href: "/contact" },
    ];

    return (
        <div className="navbar">
            <div className="navbar__content">
                <NavbarButton />
                <NavbarItems 
                    navItems={navItems} 
                    trans={trans.navbar}
                />
                <Button
                    type="navbar"
                >
                    {trans.button.download}
                </Button>
                <HamDropdown 
                    navItems={navItems} 
                    trans={trans.navbar}
                />
            </div>
        </div>
    );
}