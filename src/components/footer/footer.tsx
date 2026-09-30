import { useState, useEffect } from "react";
import Logo from "../../assets/logoComViva-sn.png"
import "./footer.scss"

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const handleChange = () => {
            setIsMobile(mediaQuery.matches);
        };

        handleChange();

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return (
        <div className="footer">
            <div className="footer-content">
                {!isMobile &&
                    <div className="item-content">
                        <p>2026 com<span className="gradient-text">Viva</span></p>
                    </div>
                }
                <div className="item-content">
                    <img src={Logo} alt="Logo do comViva" />
                </div>
                {!isMobile &&
                    <div className="item-content">
                        <p>Projeto desenvolvido para fins acadêmicos</p>
                    </div>
                }
            </div>
        </div>
    )
}
