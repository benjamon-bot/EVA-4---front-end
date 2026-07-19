const URL = "https://apiclases.inacode.cl/dental"
 
// READ ALL
export async function getCitas() {
  const res = await fetch(URL)
  if (!res.ok) throw new Error('Error al obtener citas')
  return res.json()
}
 
// READ ONE
export async function getCita(id) {
  const res = await fetch(`${URL}/${id}`)
  if (!res.ok) throw new Error('Cita no encontrada')
  return res.json()
}
 
// CREATE
export async function crearCita(cita) {
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cita),
  })
  if (!res.ok) throw new Error('Error al crear cita')
  return res.json()
}
 
// UPDATE
export async function actualizarCita(id, datos) {
  const res = await fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  })
  if (!res.ok) throw new Error('Error al actualizar cita')
  return res.json()
}
 
// DELETE
export async function eliminarCita(id) {
  const res = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Error al eliminar cita')
  return res.json()
}
 