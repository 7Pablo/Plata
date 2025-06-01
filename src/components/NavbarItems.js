// NavbarItems.js (Client Component)
"use client"; 

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

function NavbarItems({ navItems, trans }) {
  const router = useRouter();
  const pathname = usePathname(); 
  const lang = pathname.startsWith("/en") ? "en" : "es"; 

  // Language button
  const toggleLang = lang === "en" ? "es" : "en";
  const newHref = pathname.replace(`/${lang}`, `/${toggleLang}`);

  const handleLanguageChange = () => {
    router.push(newHref);
  };

  return (
    <ul className="navbar__items">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link href={`/${lang}${item.href}`}>
            <p
              className={`navbar__items--text${pathname === `/${lang}${item.href}` || (item.href === "/" && (pathname === `/${lang}` || pathname === `/`)) ? "-active" : ""}`} 
            >
              {item.label}
            </p>
          </Link>
        </li>
      ))}
      <li>
        <p
          className="navbar__items--text"
          onClick={handleLanguageChange}
        >
          {trans.language}
        </p>
      </li>
    </ul>
  );
}

export default NavbarItems;
