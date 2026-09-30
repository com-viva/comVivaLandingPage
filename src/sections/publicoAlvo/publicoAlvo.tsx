import CircularCard from "../../components/circularCard/circularCard";
import Reveal from "../../components/reveal/reveal";
import "./publicoAlvo.scss";

export default function Publico() {
    return (
        <section className="pa" id="publico">
            <div className="pa-content">
                <Reveal>
                    <div className="pa-title">
                        <h1>Para quem é o com<span className="gradient-text">Viva</span>?</h1>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="pa-text">
                        <p>
                            Para pessoas 50+ que querem aproveitar novas experiências, descobrir atividades e
                            manter uma rotina ativa e participativa.
                        </p>
                        <p className="pa-text-info">
                            Posicione o mouse em cima do círculo para saber mais
                        </p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="pa-cards">
                        <CircularCard
                            title="Pessoas 50+"
                            content="Uma plataforma pensada para as necessidades e interesses desse público."
                        />
                        <CircularCard
                            title="Interessados em novas experiências"
                            content="Para quem busca descobrir eventos, atividades e oportunidades de participação."
                        />
                        <CircularCard
                            title="Diferentes níveis de familiaridade digital"
                            content="Uma experiência simples, intuitiva e acessível, mesmo para quem não possui muita experiência com tecnologia."
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}