// PhilosophyCards.jsx (Server component)
import Image from "next/image";

export default function PhilosophyCards({ icon, title, body, color, listItems}) {
    return (
        <div className="philosophy-card">
            <div className="philosophy-card__content">
                <div 
                    className="philosophy-card__icon"
                    style={{ backgroundColor: color }}
                >
                    <Image 
                        src={icon}
                        alt="Philosophy icon"
                        height={45}
                        width={45}
                    />
                </div>
                <div className="philosophy-card__text">
                    <h3 style={{color: color}}>{title}</h3>
                    {listItems ? (
                        <ul>
                            {listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{body}</p> 
                    )}
                </div>
            </div>
        </div>
    );
}
