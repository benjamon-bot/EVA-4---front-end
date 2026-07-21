const tratamientos = [
  {
    id: 'limpieza',
    titulo: '🪥 Limpieza y Prevención',
    descripcion: 'Limpieza profesional ultrasónica, fluorización y educación en higiene bucal. Recomendada cada 6 meses. Desde $35.000 CLP.',
  },
  {
    id: 'blanqueamiento',
    titulo: '✨ Blanqueamiento Dental',
    descripcion: 'Tecnología LED de última generación. Hasta 8 tonos más claro en 60 minutos. Incluye kit de mantenimiento. Desde $120.000 CLP.',
  },
  {
    id: 'ortodoncia',
    titulo: '🦷 Ortodoncia e Implantes',
    descripcion: 'Brackets y alineadores transparentes. Implantes de titanio con garantía. Evaluación digital 3D gratuita.',
  },
  {
    id: 'urgencias',
    titulo: '🏥 Urgencias Dentales',
    descripcion: 'Atención el mismo día para dolor o piezas fracturadas. Disponible lunes a sábado de 8:00 a 20:00 h.',
  },
]

export default function Tratamientos() {
  return (
    <section id="tratamientos" className="py-5">
      <div className="container">

        <h2 className="text-center fw-bold mb-2">Nuestros Tratamientos</h2>
        <p className="text-center text-muted mb-5">
          Soluciones para cada necesidad dental
        </p>

        <div className="accordion mx-auto" style={{ maxWidth: 700 }} id="acordeonTratamientos">
          {tratamientos.map((t, i) => (
            <div className="accordion-item" key={t.id}>
              <h2 className="accordion-header">
                <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${t.id}`}>
                  {t.titulo}
                </button>
              </h2>
              <div id={t.id} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#acordeonTratamientos">
                <div className="accordion-body text-muted">
                  {t.descripcion}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}