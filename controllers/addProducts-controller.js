import { productServices } from "../service/client-service"

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const url = document.querySelector('[data-url]').value
    const name = document.querySelector('[data-name]').value
    const price = document.querySelector('[data-price]').value
    const about = document.querySelector('[data-about]').value

    productServices.addProduct(url, name, price, about)
    .then( respuesta => {
        window.location.href = "./index.html"
        console.log(respuesta)
    }).catch(error => {
        console.log(error)
    })
})