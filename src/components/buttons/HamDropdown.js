"use client";

import { Menu } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HamDropdown({ navItems, trans }) {
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";

  const [isOpen, setIsOpen] = useState(false);

  // Language button
  const toggleLang = lang === "en" ? "es" : "en";
  const newHref = pathname.replace(`/${lang}`, `/${toggleLang}`);

  const handleLanguageChange = () => {
    router.push(newHref);
  };

  return (
    <div className="ham-dropdown">
      <Menu.Root onOpenChange={(e) => setIsOpen(e.open)}>
        <Menu.Trigger asChild>
          <button className={`ham-dropdown__button ${isOpen ? "is-open" : ""}`}>
            <Image
              src="/icons/ham.svg"
              alt="Menu icon"
              height={300}
              width={300}
            />
          </button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content className="ham-dropdown__content">
            <div>
              {navItems.map((item, index) => (
                <div key={index} className="ham-dropdown__item">
                  <Link href={`/${lang}${item.href}`}>
                    <Menu.Item>
                      <p
                        className={`ham-dropdown__item${
                          pathname === `/${lang}${item.href}` ||
                          (item.href === "/" &&
                            (pathname === `/${lang}` || pathname === `/`))
                            ? "-active"
                            : ""
                        }`}
                      >
                        {item.label}
                      </p>
                    </Menu.Item>
                  </Link>
                </div>
              ))}
                <div className="ham-dropdown__item">
                  <Menu.Item>
                      <p className="ham-dropdown__item" onClick={handleLanguageChange}>
                        {trans.language}
                      </p>
                  </Menu.Item>
                </div>
            </div>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  );
}
