import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Hero from './components/hero.jsx';
import Galeria from './components/galeria.jsx';
import Tratamientos from './components/tratamientos.jsx';
import Equipo from './components/equipo.jsx';
import Contacto from './components/contacto.jsx';
import ModalCita from './components/modalCita.jsx';

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