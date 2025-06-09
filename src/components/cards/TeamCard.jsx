// TeamCards.jsx (Server component)

import Image from "next/image";

export default function TeamCard({ image, name, role }) {
    return (
        <div className="team-card">
            <div className="team-card__image">
                <Image
                    src={image}
                    alt="Member image"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="team-card__info">
                <h3>{name}</h3>
                <h4>{role}</h4>
            </div>
        </div>
    );
}