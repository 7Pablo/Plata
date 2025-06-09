// SocialButton.jsx (Client component)

import Image from "next/image";

export default function SocialButton({ icon, title, link }) {
    return (
        <a 
            className="social-button"
            href={link}
            target="_blank" 
            rel="noopener noreferrer"
        >
            <div className="social-button__icon">
                <Image
                    src={icon}
                    alt="Social button icon"
                    width={80}
                    height={80}
                /> 
            </div>
            <h3>{title}</h3>
        </a>
    );
}