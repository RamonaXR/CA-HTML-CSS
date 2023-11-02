export function createJacket(product, parent) {
    parent.innerHTML = `<section class="flex flex-1 flex-wrap left-side">
    <h1>${product.title}</h1>
    <img src="${product.image}" alt="Our finest jacket">
    </section>
    <section class="flex flex-1 flex-wrap left-side">
    <div class="flex flex-wrap flex-1 p-2">
    <p class="p-spes">${product.description}</p>
    </div>
    <span class="price">${product.price}</span>
<span class="gender">${product.gender}</span>
<div class="flex sizes">
    <p class="flex-sizes">${product.sizes}
    </div>
    <a href="checkout.html" class="button">Add to cart</a>
    <div class="flex delivery">
            <img src="Images/Delivery.png" alt="Icon" />
            <p>Always free shipping!</p>
          </div>
          <div class="flex delivery">
            <img src="Images/Return.png" alt="Icon" />
            <p>Free 30-day return policy</p>
          </div>
          <div>
            <img src="Images/Stars.svg" alt="stars" />
          </div>
        </section>`
}