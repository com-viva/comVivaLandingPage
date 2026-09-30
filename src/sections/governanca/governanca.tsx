import Card from "../../components/card/card";
import Reveal from "../../components/reveal/reveal";
import "./governanca.scss"

export default function Governanca() {
    return (
        <section className="gvr" id="governanca">
            <div className="gvr-content">
                <Reveal>
                    <div className="gvr-title">
                        <h1>Qual a nossa política de governança?</h1>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="gvr-card">
                        <Card
                            content="O projeto é aberto à colaboração e à evolução contínua. 
                            Qualquer pessoa pode sugerir melhorias, correções ou novas funcionalidades, apresentando sua proposta para avaliação da equipe. 
                            As sugestões são discutidas coletivamente, considerando sua relevância para o projeto, impacto sobre os usuários e viabilidade de implementação. 
                            Após a discussão, a decisão sobre a realização da alteração é feita por votação entre os integrantes responsáveis pelo projeto, 
                            garantindo que diferentes perspectivas sejam consideradas e que as mudanças sejam conduzidas de forma transparente e colaborativa."
                            size="large"
                            backgroundColor="#fee5d4"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}