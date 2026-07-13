const equipo = [
  { iniciales: 'MS', nombre: 'Dra. María Silva',  especialidad: 'Directora & Ortodoncia' },
  { iniciales: 'CR', nombre: 'Dr. Carlos Ruiz',   especialidad: 'Implantología' },
  { iniciales: 'AL', nombre: 'Dra. Ana López',    especialidad: 'Odontopediatría' },
  { iniciales: 'JP', nombre: 'Dr. Jorge Peña',    especialidad: 'Endodoncia' },
]

export default function Equipo() {
  return (
    <section id="equipo" className="py-5">
      <div className="container">

        <h2 className="text-center fw-bold mb-2">Nuestro Equipo</h2>
        <p className="text-center text-muted mb-5">Especialistas certificados</p>

        <div className="row justify-content-center g-4">
          {equipo.map((d) => (
            <div key={d.nombre} className="col-sm-6 col-lg-3">
              <div className="card border-0 shadow-sm text-center h-100 p-3">

                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3 fw-bold fs-5"
                  style={{ width: 64, height: 64 }}
                >
                  {d.iniciales}
                </div>

                <h6 className="fw-bold mb-1">{d.nombre}</h6>
                <p className="text-primary small mb-0">{d.especialidad}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
