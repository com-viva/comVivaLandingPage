import Comp from "../../assets/imgComputador.png";
import Logo from "../../assets/logoComViva-sn.png";
import { Link } from "react-router-dom";
import "./inProgress.scss";

export default function InProgress() {
    return (
        <div className="ip">
            <div className="ip-content">
                <div className="ip-info">
                    <div className="ip-title">
                        <img src={Logo} alt="Logo do comViva"/>
                        <h1>com<span className="gradient-text">Viva</span></h1>
                    </div>
                    <div className="ip-notice">
                        <h2>O projeto ainda está em construção!</h2>
                        <p>Nosso projeto ainda está em desenvolvimento e em breve estará disponível para você!</p>
                        <p>Enquanto isso aproveite para explorar nossa página e saber mais sobre o comViva</p>
                        <Link to="/" className="ip-button">
                            Voltar para página inicial
                        </Link>
                    </div>
                </div>
                <div className="ip-image">
                    <img src={Comp} alt="Imagem de computador com engrenagem" />
                </div>
            </div>
        </div>
    );
}