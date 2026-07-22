import antes from '../../assets/antes.jpg'
import despues from '../../assets/despues.jpg'

const casos = [
  {
    imagen:      antes,
    tratamiento: 'ortodoncia',
  },
  {
    imagen:      despues,
    tratamiento: 'ortodoncia',
    resultado:   'Sonrisa perfecta en 18 meses',
  },
]

export default function Galeria() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Resultados Reales</h2>
        <p className="text-center text-muted mb-5">Antes y después de nuestros tratamientos</p>

        <div className="row justify-content-center g-4">
          {casos.map((c) => (
            <div key={c.tratamiento} className="col-md-6">
              <div className="card border-0 shadow-sm">
                <img
                  src={c.imagen}
                  alt={c.tratamiento}
                  className="card-img-top"
                  style={{ objectFit: 'cover', maxHeight: 320 }}
                />
                <div className="card-body text-center">
                  <h6 className="fw-bold mb-1">{c.tratamiento}</h6>
                  <p className="text-muted small mb-0">{c.resultado}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}