import { useState } from 'react'
import { eliminarCita } from '../../services/CitaAPI'

export default function CitasDelete() {
  const [id, setId] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!confirm('¿Seguro que deseas eliminar esta cita?')) return
    await eliminarCita(id)
    alert('🗑️ Cita eliminada')
    setId('')
  }

  return (
    <div className="card border-0 shadow-sm p-4">
      <h5 className="fw-bold mb-3">🗑️ Eliminar cita</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label">ID de la cita</label>
          <input className="form-control" placeholder="" required
            value={id} onChange={e => setId(e.target.value)}
          />
        </div>
        <button className="btn btn-danger w-100">Eliminar cita</button>
      </form>
    </div>
  )
}
