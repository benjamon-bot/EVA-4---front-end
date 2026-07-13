import { useState } from "react"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white border-bottom sticky-top">
        <div className="container">

            <a className="navbar-brand fw-bold text-primary" href="#">
              🦷 DentaSmile
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Menu">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="Menu">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
                <li className="nav-item"><a className="nav-link" href="#tratamientos">Tratamientos</a></li>
                <li className="nav-item"><a className="nav-link" href="#equipo">Equipo</a></li>
                <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
                <li className="nav-item">
                  <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCita" >
                    Agendar Cita
                  </button>
                </li>
              </ul>
            </div>

        </div>
    </nav>
  );
}