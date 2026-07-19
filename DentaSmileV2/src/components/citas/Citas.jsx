import CitasCreate from './CitasCreate'
import CitasRead   from './CitasRead'
import CitasUpdate from './CitasUpdate'
import CitasDelete from './CitasDelete'
 
export default function Citas() {
  return (
    <section id="citas" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Gestión de Citas</h2>
        <p className="text-center text-muted mb-5">CRUD conectado a la API</p>
        <div className="row g-4">
          <div className="col-md-6"><CitasCreate /></div>
          <div className="col-md-6"><CitasRead /></div>
          <div className="col-md-6"><CitasUpdate /></div>
          <div className="col-md-6"><CitasDelete /></div>
        </div>
      </div>
    </section>
  )
}
 