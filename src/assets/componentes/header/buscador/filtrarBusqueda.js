export const resultados = (palabra, productos)=>{
    const productosFiltrados = productos?.filter(p=> p.data.nombre.includes(palabra) || p.data.descripcion.includes(palabra)) 
    console.log(productosFiltrados)
}