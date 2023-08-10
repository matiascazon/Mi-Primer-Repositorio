const articulos = document.querySelectorAll(".carta-cuerpo") //selecciono del document todos los elementos que deben tener el boton
const productos = []
let botonFavorito = document.createElement("button") //creacion del boton
botonFavorito.addEventListener("click",() => {
    console.log("click")
}) 
console.log(botonFavorito);
botonFavorito.innerHTML = "Agregar a Favoritos" //texto del boton
botonFavorito.classList = "favorito" //clase para los estilos

//agregar el boton al cuerpo de cada articulo
articulos.forEach(function(articulo){
    articulo.appendChild(botonFavorito.cloneNode(true))
})

/**
 * 
 * 
 */

const navegacion = document.querySelector("nav").querySelector("ul")

const favoritos = document.createElement("li")
favoritos.innerHTML = "Favoritos"
favoritos.addEventListener("click",() => {
    alert("productos:")
})

navegacion.appendChild(favoritos)

