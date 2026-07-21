import { useState, useEffect } from 'react'
import { getCitas, eliminarCita } from '../../services/CitaAPI'

export default function CitasDelete() {
  const [citas, setCitas]       = useState([])
  const [cargando, setCargando] = useState(false)

  useEffect(() => { obtener() }, [])

  async function obtener() {
    setCargando(true)
    const data = await getCitas()
    setCitas(data.datos || data)
    setCargando(false)
  }

  async function eliminar(id) {
    if (!confirm('¿Eliminar esta cita?')) return
    await eliminarCita(id)
    obtener() // refresca la lista
  }

  if (cargando) return <div className="text-center py-3"><div className="spinner-border text-primary" /></div>

  return (
    <div className="card border-0 shadow-sm p-4">
      <h5 className="fw-bold mb-3">🗑️ Eliminar cita</h5>

      {citas.length === 0 ? (
        <p className="text-muted small">No hay citas registradas.</p>
      ) : (
        <div className="d-flex flex-column gap-2">
          {citas.map(c => (
            <div key={c._id} className="d-flex justify-content-between align-items-center bg-light rounded p-2">
              <div>
                <div className="small fw-semibold">{c.paciente?.nombre}</div>
                <div className="small text-muted">📅 {c.fecha} — 🕐 {c.hora}</div>
                <div className="small text-muted">{c.tratamientoNombre}</div>
              </div>
              <button
                className="btn btn-sm btn-danger ms-2"
                onClick={() => eliminar(c._id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}