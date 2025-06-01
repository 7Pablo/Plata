'use client';

import Image from "next/image";

export default function FooterContact({ src, text, type, medium, trans }) {
    const defaultMessage = trans.message;

    const emailSubject = trans.subject;
    const emailBody = `${trans.greetings1}\n\n${defaultMessage}\n\n${trans.greetings2}\n${trans.name}`;

    const whatsappLink = `https://wa.me/${medium}?text=${encodeURIComponent(defaultMessage)}`;
    const emailLink = `mailto:${medium}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    const messageLink = type === "whatsapp" ? whatsappLink : type === "email" ? emailLink : "#";

    return (
        <a 
            className="footer__contact--item"
            href={messageLink}
            target="_blank" 
            rel="noopener noreferrer"
        >
            <Image 
                src={src}
                alt="Vivol social"
                width={30}
                height={30}
                priority
            />
            <p>{text}</p>
        </a>
    );
}
