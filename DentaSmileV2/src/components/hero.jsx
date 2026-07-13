export default function Hero() {
    return (
        <section className="bg-light py-5 text-center">
            <div className="container py-4">
                <h1 className="display-5 fw-bold mb-3">
                    Bienvenido a DentaSmile, Tu sonrisa, nuestra <span className="text-primary">especialidad</span>
                </h1>
                <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '500px' }}>
                  Atención dental profesional en Santiago. Agenda tu cita online en segundos.
                </p>

                <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalCita">
                        Agenda tu cita
                    </button>
                    <a href="#tratamientos" className="btn btn-outline-primary btn-lg">
                        Conoce nuestros tratamientos
                    </a>
                </div>

                <div className="row justify-content-center mt-5 g-4">
                    {[
                        { num: '+2.400', label: 'Pacientes Atendidos' },
                        { num: '15 años', label: 'Experiencia' },
                        { num: '4,9', label: 'Valoración' },
                    ].map((s)=>(
                        <div key={s.label} className="col-auto text-center">
                            <div className="fs-3 fw-bold text-primary">{s.num}</div>
                            <div className="text-muted">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}