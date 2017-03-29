//alert("Help! I need somebody... Help!");

// ESTOY PERDIDA! va de nuez

// clase constructora Lista (aun no se como usarla)
/*function Lista(){
    this.nombre = nombre;
    this.listaVacia = lista;
    this.pendiente = pendiente;
    this.borrarLista = 
}*/

// variable global para guardar listas ¿?
var listas = [];



function crearLista(){
    //creando contenedor para elementos de la lista
    var elementoLista = document.createElement("div");
    elementoLista.id = Date.now();
    var idElementoLista = elementoLista.id;
    console.log(idElementoLista);
    
    
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
    
    // input para pendientes
    var input = document.createElement("input");
    elementoLista.appendChild(input);
    
    // crear boton agregar pendiente
    var botonAgregar = document.createElement("button");
    var idBoton = document.createAttribute("id");
    idBoton.value = Date.now();
    botonAgregar.setAttributeNode(idBoton);
    botonAgregar.onclick = agregarPendiente();
    botonAgregar.innerText = "Agregar pendiente";
    elementoLista.appendChild(botonAgregar);
    // boton borrar lista
    var botonBorrarL = document.createElement("button");
    botonBorrarL.id = Date.now();
    botonBorrarL.value = idElementoLista; 
    console.log(botonBorrarL.value);
    botonBorrarL.innerText = "Borrar lista";
    botonBorrarL.onclick = function(){
        var elemento = document.getElementById(idElementoLista);
        elemento.removeChild(this);
        elemento.removeChild(document.getElementById(this.value));
    };
    
    // 1Ñ30 mi cerebro está fundidooooooo!!! T__T no carburo mas... pero se ve chido 
    
    elementoLista.appendChild(botonBorrarL);
    
    //llamando a contenedor de listas
    var contenedorListas = document.getElementById("contenedorListas");
    contenedorListas.appendChild(elementoLista);
}

function agregarPendiente(){
    // 
    var contenido = document.getElementById
    var pendienteNuevo = document.createElement("li");
     
}
