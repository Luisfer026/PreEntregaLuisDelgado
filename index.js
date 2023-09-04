const productos = [
    {nombre:"hamburguesa",precio: 30},
    {nombre:"papas fritas",precio: 10},
    {nombre:"helado",precio: 15},
    {nombre:"soda",precio: 10},
    {nombre:"hot dog",precio: 15},  
];
let carrito =[]

let seleccion= prompt("hola desea comprar algun producto si o no")


while(seleccion !="si" && seleccion !="no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

if(seleccion =="si"){
    alert("a continuacion nuestra lista de productos")

    let todoslosProductos= productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join("-"))  
} 
else if(seleccion== "no"){
alert("gracias por venir, hasta pronto.")
}
while(seleccion != "no"){
    let producto= prompt("agrega un producto a tu carrito")
    let precio = 0
    if(producto == "hamburguesa" || producto =="papas fritas" || producto =="helado" || producto =="soda" || producto =="hot dog"){
        switch(producto) {
            case "hamburguesa":
            precio = 30
            break;
            case "papas fritas":
            precio = 10
            break;
            case "helado":
            precio = 15
            break;
            case "soda":
            precio = 10
            break;
            case "hot dog":
            precio = 15
            break;
            default:
            break;
        }
     let unidades = parseInt(prompt("cuantas unidades quiere llevar"))
    
     carrito.push({producto, unidades, precio})
     console.log(carrito)
    } else{
        alert("no tenemos ese producto")
     
    }

    seleccion = prompt("desea seguir comprando?")
    
    while(seleccion === "no"){
        alert("gracias por comprar, vuelva pronto")
        carrito.forEach((carritofinal) =>{
            console.log(`producto: ${carritofinal.producto}, unidades: ${carritofinal.unidades},total a pagar${carritofinal.unidades * carritofinal.precio}`)
        })
        break;
    }
}
const total= carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0)
console.log(`el total a pagar es: ${total}`);