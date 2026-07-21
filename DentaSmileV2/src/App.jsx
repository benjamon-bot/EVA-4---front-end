import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Hero from './components/hero/hero.jsx';
import Galeria from './components//galeria/galeria.jsx';
import Tratamientos from './components/tratamientos/tratamientos.jsx';
import Equipo from './components/equipo/Equipo.jsx';
import Contacto from './components/contacto/contacto.jsx';
import ModalCita from './components//modal/modalCita.jsx';

export default function App() {
    return (
        <>
          <Navbar />
          <main>
            <Hero />
            <Tratamientos />
            <Galeria />
            <Equipo />
            <Contacto />
            <ModalCita />
          </main>  
          <Footer />
          
        </>
    )
}