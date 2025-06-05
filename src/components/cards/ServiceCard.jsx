// ServiceCards.jsx (Server component)
import Image from "next/image";

export default function ServiceCard({ icon, title, body, color}) {
    return (
        <div className="service-card">
            <div className="service-card__content">
                <div 
                    className="service-card__icon"
                    style={{ backgroundColor: color }}
                >
                    <Image 
                        src={icon}
                        alt="Service icon"
                        height={45}
                        width={45}
                    />
                </div>
                <div className="service-card__text">
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
}
