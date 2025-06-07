// AcceptCards.jsx (Server component)

import Image from "next/image";

export default function AcceptCard({ image, title, body}) {
    return (
        <div className="accept-card">
            <div className="accept-card__image">
                <Image
                    src={image}
                    alt="Acceptance card image"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="accept-card__text">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
}