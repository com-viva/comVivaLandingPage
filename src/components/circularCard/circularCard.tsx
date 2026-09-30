import { useState } from "react";
import "./circularCard.scss";

interface CircularCardProps {
    title: string;
    content: string;
}

export default function CircularCard({ title, content }: CircularCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`circular_card ${isFlipped ? "is-flipped" : ""}`}
            onClick={() => setIsFlipped((flipped) => !flipped)}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setIsFlipped((flipped) => !flipped);
                }
            }}
            role="button"
            tabIndex={0}
            aria-pressed={isFlipped}
            aria-label={`${title}: ${isFlipped ? 'ocultar' : 'ver'} detalhes`}
        >
            <div className="circular_card-inner">
                <div className="circular_card-front">
                    <p className="circular_card-title">{title}</p>
                </div>

                <div className="circular_card-back">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}