const shopcontent = document.getElementById("shopcontent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const productos = [
    {id:1,
     nombre:"hamburguesa",
     precio: 30,
     img:"https://estaticos-cdn.elperiodico.com/clip/1a0a98f5-754d-49f3-a3dd-455d1b98203e_alta-libre-aspect-ratio_default_0.jpg",
     },
    {id:2,
     nombre:"papas                     ",
     precio: 10,
     img:"https://images.unsplash.com/photo-1556710986-4a70434a76c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
     },
    {id:3,
     nombre:"helado",
     precio: 15,
     img:"https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1944&q=80",
    },
     
    {id:4,
     nombre:"soda",
     precio: 10,
    img:"https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",},
    {id:5,
     nombre:"hot dog",
     precio: 15,
    img:"https://images.unsplash.com/photo-1541151040323-4d766525ec84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",},  
];
let carrito =[]

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}</p>

    `;

    shopcontent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

     content.append(comprar);

     comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,

        });
        console.log(carrito);
     });
});
    
    verCarrito.addEventListener("click", ()=>{
        modalContainer.innerHTML ="";
        modalContainer.style.display = "flex"
        const modalheader = document.createElement("div");
        modalheader.className = "modal-header";
        modalheader.innerHTML = `
        <h2 class="modal-header-title">carrito.</h1>
        `;

        modalContainer.append(modalheader);

        const modalbutton = document.createElement("h3");
        modalbutton.innerText = "x";
        modalbutton.className = "modal-header-button";
        modalbutton.addEventListener("click", ()=>{
            modalContainer.style.display = "none";

        });

        modalheader.append(modalbutton)
        carrito.forEach((product)=>{

        let carritocontent = document.createElement("div")
        carrito.className = "modal-content"
        carrito.innerHTML = `
        <img src="${product.img}">
        <h4>${product.nombre}</h4>
        <p>${productos.precio}$</p>
        `;
        modalContainer.append(carritocontent);
    });
    const total = carrito.reduce((acc, el)=> acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total}`
    modalContainer.append(totalBuying);
    }); 