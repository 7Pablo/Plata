// NavbarButton.jsx (Client component)
'use client';

import { useRouter, usePathname } from "next/navigation"; 
import Image from "next/image";

export default function NavbarButton() {
    // Routing
    const router = useRouter();
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 

    const handleRedirect = () => {
        router.push(`/${lang}`)
    };

    return (
        <div className="navbar-button">
            <div className="navbar__logo" onClick={handleRedirect}>
                <Image
                    src="/images/plata-logo-main.png"
                    alt="Logo Plata"
                    priority
                    width={400}
                    height={400}   
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
}