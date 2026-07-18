const URL= "https://apiclases.inacode.cl/dental"


export async function getPedidos() {
  const res = await fetch(URL)
  if (!res.ok) throw new Error('Error al obtener pedidos')
  const data = await res.json()
  return data.datos
}

export async function getPedido(id) {
  const res = await fetch(${URL}/${id})
  if (!res.ok) throw new Error('Pedido no encontrado')
  return res.json()
}

export async function crearPedido(pedido) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pedido),
  })
  if (!res.ok) throw new Error('Error al crear pedido')
  return res.json()
}

export async function actualizarPedido(id, datosActualizados) {
  const res = await fetch(${BASE_URL}/${id}, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datosActualizados),
  })
  if (!res.ok) throw new Error('Error al actualizar pedido')
  return res.json()
}

export async function eliminarPedido(id) {
  const res = await fetch(${BASE_URL}/${id}, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Error al eliminar pedido')
  return res.json()
}