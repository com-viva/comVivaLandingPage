import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './header.scss';
import Logo from '../../assets/logoComViva-sn.png'

const NAV_LINKS = [
    { href: '#inicio', label: 'Início', section: 'inicio' },
    { href: '#sobre', label: 'Sobre nós', section: 'sobre' },
    { href: '#publico', label: 'Público', section: 'publico' },
    { href: '#equipe', label: 'Equipe', section: 'equipe' },
    { href: '#governanca', label: 'Governança', section: 'governanca' },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState('inicio');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenuOnLinkClick = () => setIsMenuOpen(false);

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

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 901px)');
        const closeMenu = () => setIsMenuOpen(false);
        const handleChange = () => {
            if (desktop.matches) {
                closeMenu();
            }
        };

        desktop.addEventListener('change', handleChange);

        return () => {
            desktop.removeEventListener('change', handleChange);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-content">

                <div className="header-logo">
                    <a href="#inicio" onClick={closeMenuOnLinkClick}>
                        <img src={Logo} alt="Logo do comViva" />
                    </a>
                </div>

                <button
                    type="button"
                    className="header-toggle"
                    aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                    aria-expanded={isMenuOpen}
                    aria-controls="header-menu"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <div className="header-menu" id="header-menu">
                    <nav className="header-nav">
                        {NAV_LINKS.map(({ href, label, section }) => (
                            <a
                                key={section}
                                href={href}
                                className={activeSection === section ? 'active' : ''}
                                onClick={closeMenuOnLinkClick}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    <Link to="/projeto" className="header-button" onClick={closeMenuOnLinkClick}>
                        Conheça o projeto
                    </Link>
                </div>
            </div>
        </header>
    );
}
