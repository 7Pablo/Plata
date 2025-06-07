// StepCards.jsx (Server component)
import Image from "next/image";

export default function StepCard({ icon, title, body, color }) {
    return (
        <div className="step-card">
            <div className="step-card__icon">
                <Image
                    src={icon}
                    alt="Step icon"
                    height={80}
                    width={80}
                />
            </div>
            <div className="step-card__text">
                <h3 style={{ color: color }}>{title}</h3>
                <p>{body}</p>
            </div>

        </div>
    );
}