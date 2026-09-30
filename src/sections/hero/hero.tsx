import logo from '../../assets/logoComViva.png';
import './hero.scss';


export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="hero-info">
          <div className="hero-title">
            <h1>Sua <span className="gradient-text">vida</span> não para.</h1>
            <h1>Suas <span className="gradient-text">conexões</span> também não.</h1>
          </div>
          <div className="hero-subtitle">
            <p>
              Descubra experiências, participe de eventos e conecte-se com pessoas que compartilham seus interesses.
              O ComViva transforma encontros em novas possibilidades de viver e compartilhar.
            </p>
          </div>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Logo do comViva" />
        </div>
      </div>
    </section>
  );
}
