import "./card.scss"

interface CardProps {
    title?: string;
    content: string;
    size?: 'medium' | 'large';
    backgroundColor?: string;
}

export default function Card({ title, content, size = 'medium', backgroundColor }: CardProps) {
    return (
        <div className={`card card-${size}`} style={{ '--card-bg': backgroundColor } as React.CSSProperties}>
            <p className="card-title">{title}</p>
            <p>{content}</p>
        </div>
    );
}