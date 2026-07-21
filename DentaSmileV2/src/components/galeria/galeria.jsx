const images = [
  { antes: '😐', despues: '😁', tratamiento: 'Blanqueamiento', resultado: '+7 tonos más claro' },
  { antes: '🫤', despues: '😬', tratamiento: 'Ortodoncia', resultado: 'Alineación perfecta' },
]

export default function Galeria() {
    return (
        <section className="bg-light py-5">
            <div className="container">

                <h2 className="fw-bold mb-2 text-center">Resultados Reales</h2>
                <p className="text-muted mb-4 text-center">antes y después de nuestros tratamientos</p>

        <div className="row justify-content-center g-4">
          {images.map((img, i) => (
            <div key={i} className="col-sm-10 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">

                  <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
                    <div>
                      <div style={{ fontSize: 52 }}>{img.antes}</div>
                      <span className="badge bg-secondary">Antes</span>
                    </div>
                    <span className="text-muted fs-4">→</span>
                    <div>
                      <div style={{ fontSize: 52 }}>{img.despues}</div>
                      <span className="badge bg-success">Después</span>
                    </div>
                  </div>

                  <h6 className="fw-bold">{img.tratamiento}</h6>
                  <p className="text-muted small mb-0">{img.resultado}</p>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
