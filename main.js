
const pizzas = [
    {
        id: 1,
        nombre: "Pizza de muzarella",
        precio: 900,
        ingredientes: ["queso", "aceitunas"],
        imagen: ["./assets/pizza_de_mozzarella.jpg"]

    },
    {
        id: 2,
        nombre: "Pizza de cuatroQueso",
        precio: 1200,
        ingredientes: ['queso', 'roquefort', 'tybo', 'pategrass'],
        imagen: ["./assets/Pizza-cuatro-quesos-shutterstock_1514858234.jpg"]

    },
    {
        id: 3,
        nombre: "Pizza  especial",
        precio: 1050,
        ingredientes: ['queso', 'paleta', 'huevo', 'morron'],
        imagen: ["./assets/photo.jpg"]

    },
    {
        id: 4,
        nombre: "Pizza  rustica",
        precio: 1301,
        ingredientes: ['queso', 'jamon', 'rucula', 'pategrass'],
        imagen: ["./assets/pizza_rustica.jpg"]

    },
    {
        id: 5,
        nombre: "Pizza de caprese",
        precio: 1005,
        ingredientes: ['queso', 'tomate', 'olivas', 'albahaca'],
        imagen: ["./assets/pizza_caprese.jpg"]

    },
    {
        id: 6,
        nombre: "Pizza de fugazzeta",
        precio: 980,
        ingredientes: ['queso', 'cebolla'],
        imagen: ["./assets/pizza_de_fugazza.jpg"]

    }
]

/*Traemos los elementos*/
const resultContainer = document.getElementById("result-container")
const form = document.getElementById("form")
const input = document.querySelector(".form_input")
//Va a buscar la pizza
const searchPizza = (value) => pizzas.find((pizza) => pizza.id === value)

/*Si no se ingresa numero lanzara un error*/
const showEmptyError = () => {
    resultContainer.innerHTML = `
<div class="pizza-container">
  <h1>Por favor ingrese un numero</h1>
</div>

`

}
const renderResult = (pizza) => {
    /*Si el numero no coincide*/
    if (!pizza) {
        resultContainer.innerHTML =
            ` 
        <div class="pizza-container">
        <h1>No existe numero con ese ID </h1>
        <h2>Por favor ingrese otro numero</h2>
      </div>
      
      `
    }
    /*Si el numero coincide*/
    else {
        resultContainer.innerHTML = ` 
        <div class="pizza-container">
        <h1>El nombre de su pizza es ${pizza.nombre}</h1>
        <h2>Su precio es $${pizza.precio}
        <h3>Sus ingredientes son ${pizza.ingredientes}
        <img id="imagenes" src="${pizza.imagen}" alt="">
      </div>
      
      `
    };




}


const submitSearch = (e) => {
    e.preventDefault()//Corta la actualizacion por defecto
    const searchValue = input.value
    /*Si no se ingresa nada*/
    if (!searchValue) {
        showEmptyError()//Lo definimos arriba
        return
    }
    /*Si ingresamos un numero*/
    const searchedPizza = searchPizza(Number(searchValue))
    renderResult(searchedPizza)
    form.reset(),
        localStorage.setItem('Pizza buscada', resultContainer)





}


/*Hace que funcion el evento enviar*/
const init = () => {
    form.addEventListener("submit", submitSearch)



}
init()

