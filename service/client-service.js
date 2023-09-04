//const http = new XMLHttpRequest();


//Abrir http (metodo,url)

//CRUD      -   Métodos HTTP
//Create    -   POST
//Read      -   GET
//Update    -   PUT/PATCH
//Delete    -   DELETE

//http.open('GET', 'http://localhost:3000/producto')

//http.send();

//http.onload = () => {
//    const data = http.response 
//}

const productList = () => {
    fetch("http://localhost:3000/producto")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

const addProduct = (imageUrl, name, price) => {
    fetch(`http://localhost:3000/producto`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            imageUrl,
            price,
            name,

        })
    }) .then(respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error('No es posible crear el producto. Intente de nuevo.')
}

export const productServices = {
    productList,
    addProduct
}
