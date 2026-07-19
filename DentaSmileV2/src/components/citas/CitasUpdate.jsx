import { useState } from 'react'
import { actualizarCita } from '../../services/CitaAPI'

export default function CitasUpdate() {
  const [id, setId]     = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora]   = useState('')
  const [estado, setEstado] = useState('confirmada')

  async function handleSubmit(e) {
    e.preventDefault()
    await actualizarCita(id, { fecha, hora, estado })
    alert('✅ Cita actualizada')
  }

  return (
    <div className="card border-0 shadow-sm p-4">
      <h5 className="fw-bold mb-3">✏️ Actualizar cita</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">ID de la cita</label>
          <input className="form-control" placeholder="Pega el _id aquí" required
            value={id} onChange={e => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nueva fecha</label>
          <input className="form-control" type="date" required
            value={fecha} onChange={e => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nueva hora</label>
          <input className="form-control" type="time" required
            value={hora} onChange={e => setHora(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Estado</label>
          <select className="form-select" value={estado} onChange={e => setEstado(e.target.value)}>
            <option value="confirmada">Confirmada</option>
            <option value="pendiente">Pendiente</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </div>
        <button className="btn btn-warning w-100">Actualizar cita</button>
      </form>
    </div>
  )
}
