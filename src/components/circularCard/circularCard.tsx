import "./circularCard.scss"

interface CircularCardProps {
    title: string;
    content: string;
}

export default function CircularCard({ title, content }: CircularCardProps) {
    return (
        <div className="circular_card">
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