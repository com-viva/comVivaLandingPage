import Logo from "../../assets/logoComViva-sn.png"
import "./footer.scss"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="item-content">
                    <p>2026 com<span className="gradient-text">Viva</span></p>
                </div>
                <div className="item-content">
                    <img src={Logo} alt="Logo do comViva" />
                </div>
                <div className="item-content">
                    <p>Projeto desenvolvido para fins acadêmicos</p>
                </div>
            </div>
        </div>
    )
}