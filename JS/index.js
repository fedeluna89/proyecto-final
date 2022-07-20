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
let btn2 = document.getElementById("carrito2");
let btn3 = document.getElementById("carrito3");
let btn4 = document.getElementById("carrito4");
    
    btn.addEventListener(`click`, () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregaste a carrito",
            showConfirmButton: false,
            timer: 2000,
            });
    }); 

    btn2.addEventListener(`click`, () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregaste a carrito",
            showConfirmButton: false,
            timer: 2000,
            });
    });

    btn3.addEventListener(`click`, () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregaste a carrito",
            showConfirmButton: false,
            timer: 2000,
            });
    });

    btn4.addEventListener(`click`, () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregaste a carrito",
            showConfirmButton: false,
            timer: 2000,
            });
    });