// Proceso automatizado para añadir imagenes al DOM

const imagenesTotales = 58; // Numero de imagenes
const galeria = document.querySelector(".galeria"); // Obtener a #galeria


// Función para crear una tarjeta
const crearTarjeta = (numero) => {
    // Creando un div para cada tarjeta de la galeria
    let tarjeta = document.createElement("div"); 
    tarjeta.classList.add("tarjeta");
    galeria.appendChild(tarjeta);
    
    //Header
    let header = document.createElement("h2");
    header.classList.add("header")
    tarjeta.appendChild(header)
    
     //texto del header
     let titulo = document.createTextNode(`Nombre numero: ${numero}`)
     header.appendChild(titulo)
     
     // Creando contenedor de fotos para las tarjetas
     let container = document.createElement("div"); 
     container.classList.add("contenedor") // Dandole clase
     tarjeta.appendChild(container) // A galería le damos un hijo (contenedor)
     
     // Creando cada imagen
     let img = document.createElement("img");
     img.src = `src/characters/imagen${numero}.webp`
     container.appendChild(img)  //Añadiendo la img al contenedor
     
     
     let desc = document.createElement("p") // Creando un elemento para la descripcion
     desc.classList.add("descripcion") 
     tarjeta.appendChild(desc) 
     
    let texto = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat cubilia sociosqu arcu, ") // Creando un nodo de texto con la informacion de la descripción
    desc.appendChild(texto) // Añadiendole un hijo a la descripción (el nodo de texto)
    
    return tarjeta
}



for (let i=1; i <= imagenesTotales; i++){ // Bucle que añade elementos

    tarjeta = crearTarjeta(i)

}
