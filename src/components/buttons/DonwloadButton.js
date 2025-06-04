// DownloadButton.jsx (Client component)
'use clinet'

import Image from "next/image";

export default function DonwloadButton({img, topText, bottomText}) {
    return (
        <div className="download-button">
            <div className="download-button__image">
                <Image
                    src={img}
                    alt="Download button image"
                    height={40}
                    width={40}
                />
            </div>
            <div className="download-button__text">
                <p>{topText}</p>
                <h3>{bottomText}</h3>
            </div>
        </div>
    );
}
