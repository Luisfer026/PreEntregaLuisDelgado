    const pintarcarrito = () =>{
    modalContainer.innerHTML ="";
    modalContainer.style.display = "flex"
    const modalheader = document.createElement("div");
    modalheader.className = "modal-header";
    modalheader.innerHTML = `
    <h2 class="modal-header-title">carrito.</h1>
    `;

    modalContainer.append(modalheader);

    const modalbutton = document.createElement("h3");
    modalbutton.innerText = "❌";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", ()=>{
        modalContainer.style.display = "none";

    });

    modalheader.append(modalbutton)
    carrito.forEach((product) =>{
    let carritocontent = document.createElement("div")
    carritocontent.className = "modal-content"
    carritocontent.innerHTML = `
    <img src="${product.img}">
    <h4>${product.nombre}</h4>
    <p>${product.precio}$</p>
    <p>cantidad: ${product.cantidad}</p>
    <p>total: ${product.cantidad * product.precio}</p>
    `;
    modalContainer.append(carritocontent);
    let eliminar = document.createElement("span");
    eliminar.innerText = "✖";
    eliminar. className = "delete-product";
    carritocontent.append(eliminar);

    eliminar.addEventListener("click",eliminarproducto);
});
const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0);

const totalBuying = document.createElement("div")
totalBuying.className = "total-content"
totalBuying.innerHTML = `total a pagar: ${total}`
modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click",pintarcarrito);
const eliminarproducto = () => {
    const foundID = carrito.find((Element)=>Element.id);
    carrito = carrito.filter((carritoID) => {
        return carritoID !==foundID;
    });

    pintarcarrito();

};

const carritocounter = () =>{
    cantidadcarrito.style.display = "block";
    cantidadcarrito.innerHTML = carrito.length;
    
}