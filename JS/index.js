const productos = [
    {nombre: "instituto", precio: 7000},
    {nombre: "denver", precio: 176000},
    {nombre: "parque", precio: 5000},
    {nombre: "atenas", precio: 6000},
    ];

    let filtro = productos.filter(elemento => elemento.precio < 6000);
    console.log(filtro);

    let dato = prompt("ingresa el nombre del producto a consultar").toLowerCase();

    let articulo = productos.find(elemento => elemento.nombre === dato);
    alert(`el precio del prodicto ${dato} es ${articulo.precio}`);

