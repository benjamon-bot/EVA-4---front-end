export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <h6 className="fw-bold mb-2">🦷 DentaSmile</h6>
            <p className="small text-secondary mb-0">
              Cuidamos tu salud oral con tecnología moderna y atención personalizada.
            </p>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold mb-2">Contacto</h6>
            <p className="small text-secondary mb-1"> Av. Providencia 1234, Santiago</p>
            <p className="small text-secondary mb-1"> +56 2 2345 6789</p>
            <p className="small text-secondary mb-0"> Lun–Sáb · 8:00–20:00</p>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold mb-2">Servicios</h6>
            <p className="small text-secondary mb-1">Limpieza dental</p>
            <p className="small text-secondary mb-1">Blanqueamiento</p>
            <p className="small text-secondary mb-0">Ortodoncia e Implantes</p>
          </div>

        </div>

        <hr className="border-secondary mt-4" />
        <p className="text-center small text-secondary mb-0">
          © 2025 DentaSmile · Santiago, Chile
        </p>
      </div>
    </footer>
  )
}