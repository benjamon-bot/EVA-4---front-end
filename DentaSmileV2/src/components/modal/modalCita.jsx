import { useState, useEffect } from 'react'
import CitasCreate from '../citas/CitasCreate'
import CitasRead   from '../citas/CitasRead'
import CitasUpdate from '../citas/CitasUpdate'
import CitasDelete from '../citas/CitasDelete'

export default function ModalCita() {
  return (
    <div className="modal fade" id="modalCita" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title fw-bold">🦷 DentaSmile — Citas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>

          <div className="modal-body">
            <div className="row g-4">
              <div className="col-md-6"><CitasCreate /></div>
              <div className="col-md-6"><CitasRead /></div>
              <div className="col-md-6"><CitasUpdate /></div>
              <div className="col-md-6"><CitasDelete /></div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>

        </div>
      </div>
    </div>
  )
}