//alert("Help! I need somebody... Help!");


// *** INTENTO 2.0 *** ---> Ajusté mi código inicial para aplicar el POO, creo que obtuve un buen resultado

// variable global para guardar listas ¿?
var listas = [];

// función constructora Lista
function Lista(id,nombre){
    this.id = id;
    this.nombre = nombre;
    this.pendientes = [];
}

// función constructora pendiente
function Pendiente(id,contenido){
    this.id = id;
    this.contenido = contenido;
}
//-----------------------------------------------------------------------------

// para crear nuevo objeto lista    
function crearLista(){
    var nombreLista = document.getElementById("nombreLista").value;
    //console.log(nombreLista);
    var idLista = Date.now();
    var nuevaLista = new Lista(idLista,nombreLista);
    
    // guardo nueva lista en arreglo global
    listas.push(nuevaLista);
    //console.log(listas);
    
    // llamo funciones para vaciar input y mostrar la lista creada
    borrarInput(nombreLista);
    mostrarNuevaLista(nuevaLista);
}
//----------------------------------------------------------------------------

// para borrar inputs de texto
function borrarInput(elemento){
    var inputABorrar = elemento;
    nuevoValor = "";
    inputABorrar.value = nuevoValor;
}
//-----------------------------------------------------------------------------

// para mostrar listas en html
function mostrarNuevaLista(nuevaLista){
    //creando contenedor para elementos de la lista
    var elementoLista = document.createElement("div");
        
    //para darle nombre a lista
    var nombreElementoLista = document.createElement("h3");
    nombreElementoLista.innerText = nuevaLista.nombre;
    elementoLista.appendChild(nombreElementoLista);
    
    
    // boton borrar lista
    var botonBorrarLista = document.createElement("button");
    botonBorrarLista.innerText = "Borrar lista";
    botonBorrarLista.onclick = function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    };
    elementoLista.appendChild(botonBorrarLista);
    
    // para crear la lista en sí
    var lista = document.createElement("ul");
    var idLista = document.createAttribute("id");
    idLista.value = Date.now();
    lista.setAttributeNode(idLista);
    elementoLista.appendChild(lista);
    
    // input para pendientes a agregar
    var input = document.createElement("input");
    input.placeholder = "Nuevo pendiente";
    elementoLista.appendChild(input);
    
    // crear boton agregar pendiente
    var botonAgregar = document.createElement("button");
    botonAgregar.onclick = crearPendiente;
    botonAgregar.innerText = "Agregar pendiente";
    elementoLista.appendChild(botonAgregar);
    
    //llamando a contenedor de listas
    var contenedorListas = document.getElementById("contenedorListas");
    contenedorListas.appendChild(elementoLista);
}
//-----------------------------------------------------------------------------

// para crear nuevo pendiente
function crearPendiente(){
    var id = Date.now();
    var cajaTexto = this.previousSibling;
    var contenidoPendiente = cajaTexto.value;
    //console.log(contenidoPendiente);
    var nuevoPendiente = new Pendiente(id,contenidoPendiente);
    //console.log(cajaTexto,nuevoPendiente);
    
    borrarInput(cajaTexto); // servía esta función y ya no ¿?
    mostrarPendiente(cajaTexto,nuevoPendiente);
};

// para mandar pendiente a lista de html
function mostrarPendiente(cajaTexto,nuevoPendiente) {
    //lista a la que voy a agregar el pendiente
    var lista = cajaTexto.previousSibling;
    var pendienteNuevo = document.createElement("li");
    pendienteNuevo.innerText = nuevoPendiente.contenido;
    
    var botonBorrarPendiente = document.createElement("button");
    botonBorrarPendiente.innerText = "x";
    botonBorrarPendiente.onclick = function(){
        var lista = this.parentNode;
        lista.removeChild(this.previousSibling); 
        lista.removeChild(this);
    };
    
    lista.appendChild(pendienteNuevo);
    lista.appendChild(botonBorrarPendiente);
    
}








