import { useState, useEffect } from 'react'

export default function Contacto() {
  const [form, setForm]     = useState({ nombre: '', email: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

 
  const [consultas, setConsultas] = useState(() => {
    const guardadas = localStorage.getItem('consultas')
    return guardadas ? JSON.parse(guardadas) : []
  })

  const [verConsultas, setVerConsultas] = useState(false)


  useEffect(() => {
    localStorage.setItem('consultas', JSON.stringify(consultas))
  }, [consultas])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const nuevosErrores = {}
    if (!form.nombre.trim())               nuevosErrores.nombre  = 'Ingresa tu nombre'
    if (!/\S+@\S+\.\S+/.test(form.email)) nuevosErrores.email   = 'Ingresa un email válido'
    if (!form.mensaje.trim())              nuevosErrores.mensaje = 'Escribe tu mensaje'

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }


    const nuevaConsulta = {
      id:     Date.now(),
      nombre: form.nombre,
      email:  form.email,
      mensaje: form.mensaje,
      fecha:  new Date().toLocaleDateString('es-CL', {
        day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
      }),
    }
    setConsultas(prev => [...prev, nuevaConsulta])
    setErrores({})
    setEnviado(true)
    setForm({ nombre: '', email: '', mensaje: '' })
    setTimeout(() => setEnviado(false), 4000)
  }

  function eliminarConsulta(id) {
    setConsultas(prev => prev.filter(c => c.id !== id))
  }

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center fw-bold mb-2">Contáctanos</h2>
        <p className="text-center text-muted mb-5">Te respondemos en menos de 24 horas</p>

        <div className="row justify-content-center g-5">

          <div className="col-md-8 col-lg-6">
            {enviado && (
              <div className="alert alert-success">
                ✅ ¡Mensaje enviado! Te contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre</label>
                <input
                  className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                />
                {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.cl"
                />
                {errores.email && <div className="invalid-feedback">{errores.email}</div>}
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Mensaje</label>
                <textarea
                  className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
                  name="mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                />
                {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Enviar mensaje
              </button>
            </form>

            {consultas.length > 0 && (
              <button
                className="btn btn-outline-secondary w-100 mt-3"
                onClick={() => setVerConsultas(!verConsultas)}
              >
                {verConsultas ? 'Ocultar' : `Ver consultas guardadas (${consultas.length})`}
              </button>
            )}

            {verConsultas && (
              <div className="mt-3 d-flex flex-column gap-2">
                {consultas.map((c) => (
                  <div key={c.id} className="card border-0 shadow-sm p-3">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <div className="fw-semibold small">{c.nombre} — {c.email}</div>
                        <div className="text-muted small mb-1">{c.fecha}</div>
                        <div className="small">{c.mensaje}</div>
                      </div>
                      <button
                        className="btn btn-sm btn-link text-danger ms-2 p-0"
                        onClick={() => eliminarConsulta(c.id)}
                        title="Eliminar"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}