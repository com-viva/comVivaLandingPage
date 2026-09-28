import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './header.scss';
import Logo from '../../assets/logoComViva-sn.png'

export default function Header() {
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            {
                rootMargin: '-80px 0px 0px 0px',
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="header">
            <div className="header-content">

                <div className="header-logo">
                    <a href="#inicio">
                        <img src={Logo} alt="Logo do comViva" />
                    </a>
                </div>

                <nav className="header-nav">
                    <a href="#inicio" className={activeSection === 'inicio' ? 'active' : ''}>
                        Início
                    </a>
                    <a href="#sobre" className={activeSection === 'sobre' ? 'active' : ''}>
                        Sobre nós
                    </a>
                    <a href="#publico" className={activeSection === 'publico' ? 'active' : ''}>
                        Público
                    </a>
                    <a href="#equipe" className={activeSection === 'equipe' ? 'active' : ''}>
                        Equipe
                    </a>
                    <a href="#governanca" className={activeSection === 'governanca' ? 'active' : ''}>
                        Governança
                    </a>
                </nav>

                <Link to="/projeto" className="header-button">
                    Conheça o projeto
                </Link>
            </div>
        </header>
    );
}