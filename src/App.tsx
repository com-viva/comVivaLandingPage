import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Equipe from './sections/equipe/equipe';
import Governanca from './sections/governanca/governanca';
import Hero from './sections/hero/hero';
import Publico from './sections/publicoAlvo/publicoAlvo';
import SobreNos from './sections/sobreNos/sobreNos';
import InProgress from './components/screenInProgress/inProgress';

function LandingPage() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <SobreNos />
                <Publico />
                <Equipe />
                <Governanca />
                <Footer />
            </main>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/projeto" element={<InProgress />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
