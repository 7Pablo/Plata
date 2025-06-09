// ContactCard.jsx (Server component)

import Image from "next/image";

export default function ContactCard({ icon, title, body }) {
    return (
        <div className="contact-card">
            <div className="contact-card__icon">
                <Image
                    src={icon}
                    alt="Contact icon"
                    width={80}
                    height={80}
                />
            </div>
            <h3>{title}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{body}</p>
        </div>
    );
}
