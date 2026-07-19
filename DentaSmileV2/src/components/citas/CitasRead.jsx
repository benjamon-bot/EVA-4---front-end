import { useState, useEffect } from 'react'
import { getCitas } from '../../services/CitaAPI'

export default function CitasRead() {
  const [citas, setCitas]       = useState([])
  const [cargando, setCargando] = useState(false)

  useEffect(() => { obtener() }, [])

  async function obtener() {
    setCargando(true)
    const data = await getCitas()
    setCitas(data.datos || data)
    setCargando(false)
  }

  if (cargando) return <div className="text-center py-4"><div className="spinner-border text-primary" /></div>

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">📋 Citas ({citas.length})</h5>
        <button className="btn btn-outline-secondary btn-sm" onClick={obtener}>🔄 Actualizar</button>
      </div>
      <div className="d-flex flex-column gap-2">
        {citas.map(c => (
          <div key={c._id} className="card border-0 shadow-sm p-3">
            <div className="fw-bold">{c.paciente?.nombre}</div>
            <div className="text-muted small">📞 {c.paciente?.telefono}</div>
            <div className="text-muted small">📅 {c.fecha} — 🕐 {c.hora}</div>
            <div className="mt-1">
              <span className="badge bg-primary me-1">{c.tratamientoNombre}</span>
              <span className="badge bg-secondary">{c.estado}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
