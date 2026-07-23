import { useState, useEffect } from 'react'
import { getCitas, actualizarCita } from '../../services/CitaAPI'

const SERVICIOS = [
  { id: '001', nombre: 'Limpieza Dental' },
  { id: '002', nombre: 'Blanqueamiento Dental' },
  { id: '003', nombre: 'Ortodoncia' },
  { id: '004', nombre: 'Implantes' },
  { id: '005', nombre: 'Urgencia Dental' },
]

export default function CitasUpdate() {
  const [citas, setCitas]         = useState([])
  const [citaElegida, setCitaElegida] = useState(null)
  const [form, setForm]           = useState({})
  const [cargando, setCargando]   = useState(false)

  useEffect(() => { obtener() }, [])

  async function obtener() {
    setCargando(true)
    const data = await getCitas()
    setCitas(data.datos || data)
    setCargando(false)
  }

  function seleccionar(c) {
    setCitaElegida(c)
    setForm({
      paciente:          { nombre: c.paciente?.nombre || '', telefono: c.paciente?.telefono || '' },
      tratamientoId:     c.tratamientoId     || '',
      tratamientoNombre: c.tratamientoNombre || '',
      fecha:             c.fecha             || '',
      hora:              c.hora              || '',
      estado:            c.estado            || 'confirmada',
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await actualizarCita(citaElegida._id, form)
    alert('✅ Cita actualizada')
    setCitaElegida(null)
    obtener()
  }

  function handleServicio(e) {
    const s = SERVICIOS.find(s => s.id === e.target.value)
    setForm({ ...form, tratamientoId: s?.id || '', tratamientoNombre: s?.nombre || '' })
  }

  if (cargando) return <div className="text-center py-3"><div className="spinner-border text-primary" /></div>

  return (
    <div className="card border-0 shadow-sm p-4">
      <h5 className="fw-bold mb-3">✏️ Actualizar cita</h5>
      <button className="btn btn-outline-secondary btn-sm" onClick={obtener}>🔄 Actualizar</button>

      {!citaElegida ? (
        <div className="d-flex flex-column gap-2">
          <p className="text-muted small mb-2">Selecciona la cita que deseas modificar:</p>
          {citas.length === 0 ? (
            <p className="text-muted small">No hay citas registradas.</p>
          ) : (
            citas.map(c => (
              <div
                key={c._id}
                className="d-flex justify-content-between align-items-center bg-light rounded p-2"
              >
                <div>
                  <div className="small fw-semibold">{c.paciente?.nombre}</div>
                  <div className="small text-muted">📅 {c.fecha} — 🕐 {c.hora}</div>
                  <div className="small text-muted">{c.tratamientoNombre}</div>
                </div>
                <button
                  className="btn btn-sm btn-outline-primary ms-2"
                  onClick={() => seleccionar(c)}
                >
                  ✏️
                </button>
              </div>
            ))
          )}
        </div>
      ) : (

        <form onSubmit={handleSubmit}>
          <p className="text-muted small mb-3">
            Editando cita de <strong>{citaElegida.paciente?.nombre}</strong>
          </p>

          <div className="mb-3">
            <label className="form-label">Nombre paciente</label>
            <input className="form-control" value={form.paciente.nombre}
              onChange={e => setForm({ ...form, paciente: { ...form.paciente, nombre: e.target.value } })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input className="form-control" value={form.paciente.telefono}
              onChange={e => setForm({ ...form, paciente: { ...form.paciente, telefono: e.target.value } })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Tratamiento</label>
            <select className="form-select" value={form.tratamientoId} onChange={handleServicio}>
              <option value="">Selecciona</option>
              {SERVICIOS.map(s => <option key={s.id} value={s.id}>{s.nombre}</option>)}
            </select>
          </div>

          <div className="row g-2 mb-3">
            <div className="col">
              <label className="form-label">Fecha</label>
              <input className="form-control" type="date" value={form.fecha}
                onChange={e => setForm({ ...form, fecha: e.target.value })}
              />
            </div>
            <div className="col">
              <label className="form-label">Hora</label>
              <input className="form-control" type="time" value={form.hora}
                onChange={e => setForm({ ...form, hora: e.target.value })}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Estado</label>
            <select className="form-select" value={form.estado}
              onChange={e => setForm({ ...form, estado: e.target.value })}
            >
              <option value="confirmada">Confirmada</option>
              <option value="pendiente">Pendiente</option>
              <option value="cancelada">Cancelada</option>
            </select>
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-warning flex-grow-1">Guardar cambios</button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => setCitaElegida(null)}>
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  )
}