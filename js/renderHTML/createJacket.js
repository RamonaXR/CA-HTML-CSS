export function createJacket(product, parent) {
    parent.innerHTML = `<h1>${product.title}</h1>
    <img src="${product.image}" alt="Our finest jacket">
    <p>${product.description}</p>`
}