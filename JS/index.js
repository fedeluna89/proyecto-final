const productos = [
    {nombre: "instituto", precio: 7000},
    {nombre: "denver", precio: 176000},
    {nombre: "parque", precio: 5000},
    {nombre: "atenas", precio: 6000},
    ];

    let filtro = productos.filter(elemento => elemento.precio < 6000);
    console.log(filtro);

    let dato = prompt("ingresa el nombre del equipo que te interes").toLowerCase();

    let articulo = productos.find(elemento => elemento.nombre === dato);
    alert(`la camiseta oficial de ${dato} tiene el valor de ${articulo.precio} pesos`);

    alert("gracias por tu consulta");

    

