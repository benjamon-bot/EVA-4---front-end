import { useState } from 'react'
import { crearCita } from '../../services/CitaAPI'
 
const SERVICIOS = [
  { id: '001', nombre: 'Limpieza Dental' },
  { id: '002', nombre: 'Blanqueamiento Dental' },
  { id: '003', nombre: 'Ortodoncia' },
  { id: '004', nombre: 'Implantes' },
  { id: '005', nombre: 'Urgencia Dental' },
]
 
export default function CitasCreate() {
  const [form, setForm] = useState({
    paciente: { nombre: '', telefono: '' },
    tratamientoId: '', tratamientoNombre: '',
    fecha: '', hora: '', estado: 'confirmada',
  })
 
  async function handleSubmit(e) {
    e.preventDefault()
    await crearCita(form)
    alert('✅ Cita creada')
  }
 
  return (
    <div className="card border-0 shadow-sm p-4">
      <h5 className="fw-bold mb-3">➕ Crear cita</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre paciente</label>
          <input className="form-control" required
            value={form.paciente.nombre}
            onChange={e => setForm({ ...form, paciente: { ...form.paciente, nombre: e.target.value } })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input className="form-control" required
            value={form.paciente.telefono}
            onChange={e => setForm({ ...form, paciente: { ...form.paciente, telefono: e.target.value } })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tratamiento</label>
          <select className="form-select" required
            onChange={e => {
              const s = SERVICIOS.find(s => s.id === e.target.value)
              setForm({ ...form, tratamientoId: s.id, tratamientoNombre: s.nombre })
            }}
          >
            <option value="">Selecciona</option>
            {SERVICIOS.map(s => <option key={s.id} value={s.id}>{s.nombre}</option>)}
          </select>
        </div>
        <div className="row g-2 mb-3">
          <div className="col">
            <label className="form-label">Fecha</label>
            <input className="form-control" type="date" required
              onChange={e => setForm({ ...form, fecha: e.target.value })}
            />
          </div>
          <div className="col">
            <label className="form-label">Hora</label>
            <input className="form-control" type="time" required
              onChange={e => setForm({ ...form, hora: e.target.value })}
            />
          </div>
        </div>
        <button className="btn btn-primary w-100">Crear cita</button>
      </form>
    </div>
  )
}
 