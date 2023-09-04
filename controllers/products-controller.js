const newProduct = (name, imageUrl, price, id) => {
    const card = document.createElement('article')
    const content = `
    <article class="display-products">
        <img class="prod-img" src="${imageUrl} ">
        <h2>Producto XYZ${name}</h2>
        <p>$ 60.00${price}</p>
        <a href="">Ver producto</a>
    </article>`

    card.innerHTML = content
    card.dataset.id = id

    return card
}

const products = document.querySelector('[data-product]')