//alert("Help! I need somebody... Help!");

function crearLista(){
    //creando contenedor para elementos de la lista
    var listaContenida = document.createElement("div");
    var idLista = document.createAttribute("id");
    idLista.value = Date.now();
    listaContenida.setAttributeNode(idLista);
    
    //para darle nombre a lista
    var nombreLista = document.createElement("h3");
    var nombreDado = document.createTextNode(prompt("Nombre de lista"));
    nombreLista.appendChild(nombreDado);
    listaContenida.appendChild(nombreLista);
   
    
    
    //llamando a contenedor de listas
    var contenedorListas = document.getElementById("contenedorListas");
    contenedorListas.appendChild(listaContenida);
    
    
}