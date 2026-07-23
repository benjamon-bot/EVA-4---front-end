import { useState } from 'react'
import antes   from '../../assets/antes.jpg'
import despues from '../../assets/despues.jpg'

const casos = [
  {
    tratamiento: 'Ortodoncia',
    resultado:   'Sonrisa perfecta en 18 meses',
    imagenAntes:   antes,
    imagenDespues: despues,
  },
]

export default function Galeria() {
  const [visible, setVisible] = useState({})

  function toggleImagen(tratamiento) {
    setVisible(prev => ({ ...prev, [tratamiento]: !prev[tratamiento] }))
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Resultados Reales</h2>
        <p className="text-center text-muted mb-5">Antes y después de nuestros tratamientos</p>

        <div className="row justify-content-center g-4">
          {casos.map((c) => (
            <div key={c.tratamiento} className="col-md-8">
              <div className="card border-0 shadow-sm">

                {visible[c.tratamiento] && (
                  <div className="row g-0">
                    <div className="col-6 text-center p-2">
                      <img src={c.imagenAntes} alt="Antes" className="img-fluid rounded" />
                      <p className="small text-muted mt-1 mb-0">Antes</p>
                    </div>
                    <div className="col-6 text-center p-2">
                      <img src={c.imagenDespues} alt="Después" className="img-fluid rounded" />
                      <p className="small text-muted mt-1 mb-0">Después</p>
                    </div>
                  </div>
                )}

                <div className="card-body text-center">
                  <h6 className="fw-bold mb-1">{c.tratamiento}</h6>
                  <p className="text-muted small mb-2">{c.resultado}</p>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => toggleImagen(c.tratamiento)}
                  >
                    {visible[c.tratamiento] ? 'Ocultar resultado' : 'Ver resultado'}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}