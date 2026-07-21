import { useState, useEffect } from 'react'
import CitasCreate from '../citas/CitasCreate'
import CitasRead   from '../citas/CitasRead'
import CitasUpdate from '../citas/CitasUpdate'
import CitasDelete from '../citas/CitasDelete'
 
const HORARIOS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
 
function getDias() {
  const hoy = new Date()
  const año = hoy.getFullYear()
  const mes = hoy.getMonth()
  const totalDias = new Date(año, mes + 1, 0).getDate()
  const dias = []
  for (let d = 1; d <= totalDias; d++) {
    dias.push(new Date(año, mes, d))
  }
  return dias
}
 
export default function ModalCita() {
  const [tab, setTab]               = useState('agendar')
  const [diaSeleccionado, setDia]   = useState(null)
  const [horaSeleccionada, setHora] = useState(null)
  const [confirmado, setConfirmado] = useState(false)
 
  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem('citas')
    return guardadas ? JSON.parse(guardadas) : []
  })
 
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])
 
  const hoy = new Date()
  hoy.setHours(0, 0, 0, 0)
  const dias = getDias()
 
  const horasOcupadas = citas
    .filter(c => c.dia === diaSeleccionado?.toDateString())
    .map(c => c.hora)
 
  function confirmar() {
    if (!diaSeleccionado || !horaSeleccionada) {
      alert('Selecciona un día y una hora')
      return
    }
    const nuevaCita = {
      id:       Date.now(),
      dia:      diaSeleccionado.toDateString(),
      hora:     horaSeleccionada,
      diaLabel: diaSeleccionado.toLocaleDateString('es-CL', {
        weekday: 'long', day: 'numeric', month: 'long'
      }),
    }
    setCitas(prev => [...prev, nuevaCita])
    setConfirmado(true)
  }
 
  function resetear() {
    setDia(null)
    setHora(null)
    setConfirmado(false)
    setTab('agendar')
  }
 
  function eliminarCitaLocal(id) {
    setCitas(prev => prev.filter(c => c.id !== id))
  }
 
  return (
    <div className="modal fade" id="modalCita" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
 
          <div className="modal-header">
            <h5 className="modal-title fw-bold">🦷 DentaSmile — Citas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={resetear} />
          </div>
 
          <div className="modal-body p-0">
 
            {/* PESTAÑAS */}
            <ul className="nav nav-tabs px-3 pt-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${tab === 'agendar' ? 'active' : ''}`}
                  onClick={() => { setTab('agendar'); resetear() }}
                >
                  📅 Agendar
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${tab === 'gestionar' ? 'active' : ''}`}
                  onClick={() => setTab('gestionar')}
                >
                  ⚙️ Gestionar
                </button>
              </li>
            </ul>
 
            <div className="p-4">
 
              {/* TAB 1 — CALENDARIO (tu código original) */}
              {tab === 'agendar' && (
                <>
                  {confirmado ? (
                    <div className="text-center py-3">
                      <div style={{ fontSize: 56 }}>✅</div>
                      <h5 className="fw-bold mt-3">¡Cita confirmada!</h5>
                      <p className="text-muted">
                        {diaSeleccionado?.toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long' })}
                        {' — '}
                        {horaSeleccionada} h
                      </p>
                      <p className="text-muted small">Quedó registrada en el historial.</p>
                    </div>
                  ) : (
                    <div className="row g-4">
                      <div className="col-md-7">
                        <p className="fw-semibold mb-2">Elige un día</p>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                          {dias.map((d) => {
                            const pasado  = d < hoy
                            const elegido = diaSeleccionado?.toDateString() === d.toDateString()
                            return (
                              <button
                                key={d.getDate()}
                                disabled={pasado}
                                onClick={() => { setDia(d); setHora(null) }}
                                className={`btn btn-sm ${
                                  elegido ? 'btn-primary' :
                                  pasado  ? 'btn-light text-muted' : 'btn-outline-secondary'
                                }`}
                                style={{ minWidth: 40 }}
                              >
                                {d.getDate()}
                              </button>
                            )
                          })}
                        </div>
 
                        {diaSeleccionado && (
                          <>
                            <p className="fw-semibold mb-2">Elige una hora</p>
                            <div className="d-flex flex-wrap gap-2">
                              {HORARIOS.map((h) => {
                                const ocupado = horasOcupadas.includes(h)
                                return (
                                  <button
                                    key={h}
                                    disabled={ocupado}
                                    onClick={() => setHora(h)}
                                    className={`btn btn-sm ${
                                      ocupado ? 'btn-light text-muted text-decoration-line-through' :
                                      horaSeleccionada === h ? 'btn-primary' : 'btn-outline-secondary'
                                    }`}
                                  >
                                    {h}
                                  </button>
                                )
                              })}
                            </div>
                          </>
                        )}
                      </div>
 
                      <div className="col-md-5">
                        <p className="fw-semibold mb-2">📋 Citas agendadas ({citas.length})</p>
                        {citas.length === 0 ? (
                          <p className="text-muted small">No hay citas registradas aún.</p>
                        ) : (
                          <div className="d-flex flex-column gap-2" style={{ maxHeight: 260, overflowY: 'auto' }}>
                            {citas.map((c) => (
                              <div key={c.id} className="d-flex align-items-start justify-content-between bg-light rounded p-2">
                                <div>
                                  <div className="small fw-semibold">{c.diaLabel}</div>
                                  <div className="small text-muted">🕐 {c.hora} h</div>
                                </div>
                                <button
                                  className="btn btn-sm btn-link text-danger p-0 ms-2"
                                  onClick={() => eliminarCitaLocal(c.id)}
                                >✕</button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
 
              {/* TAB 2 — CRUD API */}
              {tab === 'gestionar' && (
                <div className="row g-4">
                  <div className="col-md-6"><CitasCreate /></div>
                  <div className="col-md-6"><CitasRead /></div>
                  <div className="col-md-6"><CitasUpdate /></div>
                  <div className="col-md-6"><CitasDelete /></div>
                </div>
              )}
 
            </div>
          </div>
 
          <div className="modal-footer">
            {tab === 'agendar' && !confirmado && (
              <button className="btn btn-primary" onClick={confirmar}>
                Confirmar cita
              </button>
            )}
            {confirmado && (
              <button className="btn btn-primary" data-bs-dismiss="modal" onClick={resetear}>
                Cerrar
              </button>
            )}
            <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetear}>
              Cancelar
            </button>
          </div>
 
        </div>
      </div>
    </div>
  )
}
 