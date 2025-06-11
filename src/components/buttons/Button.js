// Button.jsx (Client component)
'use client';

import { useRouter, usePathname } from "next/navigation"; 

export default function Button({
    type,
    route,
    children,
    disabled = false,
}) {

    // Routing
    const router = useRouter();
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 

    const handleRedirect = () => {
        router.push(`/${lang}/${route}`);
    };
    
    return (
        <button 
            className={`button ${type === "navbar" ? "button--navbar" : ""}`}
            onClick={handleRedirect}
            disabled={disabled}
        >
            {children}
        </button>
    );
}