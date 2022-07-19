const productos = [];

productos.push(
    {id: "instituto", nombre: "institutoCamiseta", precio: 7000},
    {id: "instituto", nombre: "institutoCampera", precio: 9700},
    {id: "denver", nombre: "denver", precio: 176000},
    {id: "parque", nombre: "parque", precio: 5000},
    {id: "atenas", nombre: "atenas", precio: 6000},
)
console.log(productos);

let btn = document.getElementById("carrito");
    
    btn.addEventListener(`click`, () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregaste a carrito",
            showConfirmButton: false,
            timer: 2000,
            });
    }) 
