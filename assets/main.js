//alert("Help! I need somebody... Help!");

// ESTOY PERDIDA! va de nuez
// variable global para guardar listas ¿?
var listas = [];



function crearLista(){
    //creando contenedor para elementos de la lista
    var elementoLista = document.createElement("div");
    var idElementoLista = document.createAttribute("id");
    idElementoLista.value = Date.now();
    elementoLista.setAttributeNode(idElementoLista);
    
    //para darle nombre a lista
    var nombreElementoLista = document.createElement("h3");
    var nombreDado = document.createTextNode(prompt("Nombre de lista"));
    nombreElementoLista.appendChild(nombreDado);
    elementoLista.appendChild(nombreElementoLista);
    
    // para crear la lista en si
    var lista = document.createElement("ul");
    var idLista = document.createAttribute("id");
    idLista.value = Date.now();
    lista.setAttributeNode(idLista);
    elementoLista.appendChild(lista);
    
    // crear boton agregar pendiente
    var botonAgregar = document.createElement("button");
    var idBoton = document.createAttribute("id");
    idBoton.value = Date.now();
    botonAgregar.setAttributeNode(idBoton);
    botonAgregar.addEventListener("click",agregarPendiente());
    botonAgregar.innerText = "Agregar pendiente";
    elementoLista.appendChild(botonAgregar);
    // boton borrar lista
    var botonBorrarL = document.createElement("button");
    var idBotonbotonBorrarL = document.createAttribute("id");
    idBotonbotonBorrarL.value = Date.now();
    botonBorrarL.setAttributeNode(idBotonbotonBorrarL);
    botonBorrarL.addEventListener("click",borrarLista());
    botonBorrarL.innerText = "Borrar lista";
    elementoLista.appendChild(botonBorrarL);
    
    //llamando a contenedor de listas
    var contenedorListas = document.getElementById("contenedorListas");
    contenedorListas.appendChild(elementoLista);
}

function agregarPendiente(){
    
}

function borrarLista(){
    
}