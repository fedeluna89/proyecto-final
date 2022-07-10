const productos = [];

productos.push(
    {id: "instituto", nombre: "institutoCamiseta", precio: 7000},
    {id: "instituto", nombre: "institutoCampera", precio: 9700},
    {id: "denver", nombre: "denver", precio: 176000},
    {id: "parque", nombre: "parque", precio: 5000},
    {id: "atenas", nombre: "atenas", precio: 6000},
)
console.log(productos);

    let dato = prompt("ingresa el nombre del equipo que te interes").toLowerCase();

    let articulo = productos.find(elemento => elemento.nombre === dato);
    alert(`la camiseta oficial de ${dato} tiene el valor de ${articulo.precio} pesos`);
    /* let contenedor = document.getElementById("contenedor");
    let dato = prompt("ingresa el nombre del equipo que te interes").toLowerCase();

    let filtrados = productos.filter(elemento => elemento.id === dato);

    for(const producto of filtrados){
        let item = document.createElement("div");
        item.innerHTML =   `<h5>id: ${producto.id}
                            <p>nombre: ${producto.nombre}</p>
                            <b>precio: ${producto.precio}</b>`

        contenedor.append(item);
    } */
    alert("gracias por tu consulta");
