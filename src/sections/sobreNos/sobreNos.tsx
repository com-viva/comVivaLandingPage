import './sobreNos.scss';
import Card from '../../components/card/card';

export default function SobreNos() {
    return (
        <section className="sn" id="sobre">
            <div className="sn-content">
                <div className="sn-title">
                    <h1>Sobre o com<span className="gradient-text">Viva</span></h1>
                </div>
                <div className="sn-text">
                    <p>
                        O com<span className="gradient-text">Viva</span> é uma plataforma digital para pessoas 50+ descobrirem eventos e atividades de acordo com seus interesses.
                        A plataforma facilita a busca, a escolha e a participação em diferentes experiências, oferecendo uma interface simples,
                        acessível e pensada para tornar o dia a dia mais ativo.
                    </p>
                </div>
                <div className="sn-cards">
                    <Card
                        title="Conectar"
                        content="Encontre eventos que reúnem pessoas com interesses e obetivos semelhantes"
                        backgroundColor="#ede7ff"
                    />
                    <Card
                        title="Viver"
                        content="Participe de atividades que tornam a rotina mais ativa, leve e significativa."
                        backgroundColor="#ede7ff"
                    />
                    <Card
                        title="Descobrir"
                        content="Explore eventos, atividades e experiências que combinam com seus interesses."
                        backgroundColor="#ede7ff"
                    />
                </div>
            </div>
        </section>
    );
}