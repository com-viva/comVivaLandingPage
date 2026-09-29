import Reveal from "../../components/reveal/reveal";
import Alicia from "./assets/alicia.png";
import Anderson from "./assets/anderson.png";
import Carol from "./assets/carol.png";
import Flavia from "./assets/flavia.png";
import "./equipe.scss";

export default function Equipe() {
    return (
        <section className="eqp" id="equipe">
            <div className="eqp-content">
                <Reveal>
                    <div className="eqp-title">
                        <h1>Quem está por trás do projeto?</h1>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="eqp-integrantes">

                        <div className="eqp-integrante">
                            <div className="img-integrante">
                                <img src={Alicia} alt="Desenho Alicia" />
                            </div>
                            <p className="title-integrante"> Alícia </p>
                            <p> Desenvolvedora </p>
                            <p> Product Lead </p>
                        </div>

                        <div className="eqp-integrante">
                            <div className="img-integrante">
                                <img src={Anderson} alt="Desenho Anderson" />
                            </div>
                            <p className="title-integrante"> Anderson </p>
                            <p> Desenvolvedor </p>
                            <p> Marketing e comunicação </p>
                        </div>

                        <div className="eqp-integrante">
                            <div className="img-integrante">
                                <img src={Carol} alt="Desenho Carol" />
                            </div>
                            <p className="title-integrante"> Carol </p>
                            <p> Desenvolvedora </p>
                            <p> Project Lead </p>
                        </div>

                        <div className="eqp-integrante">
                            <div className="img-integrante">
                                <img src={Flavia} alt="Desenho Flavia" />
                            </div>
                            <p className="title-integrante"> Flávia </p>
                            <p> Desenvolvedora </p>
                            <p> Product Designer </p>
                        </div>

                    </div>
                </Reveal>
            </div>
        </section>
    );
}