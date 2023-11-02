export function createHtmlForProduct(product, parent) {
    const container = document.querySelector('.container-spesific');
    if (container) {
        
        parent.innerHTML += `
            <h1>${product.title}</h1>
            <img src="${product.image}" alt="${product.title}" />
            <p>${product.description}</p>
        `;
    } else {
        console.error('Specific product not found');
    }
}