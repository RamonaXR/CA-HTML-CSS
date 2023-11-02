import { getProducts } from "./../data/fetchAPI.js";
import { createJackets } from "./createJackets.js";

export let products = await getProducts();

console.log(products);


export function createHtmlHome(product, parent) {

parent.innerHTML = `<h1 class="jackets-heading">Our jackets</h1>`;

    createJackets(product, parent);
}

// function createJackets(product, parent) {
//     for(let i = 0; i < product.length; i++) {

//         parent.innerHTML += `<section class="jackets">
//                                 <h2 class="h2-jackets">${product[i].title}</h2>
//                                 <img src="${product[i].image}" 
//                                 alt="jacket ${product[i].title}" 
//                                 class="product-jackets" 
//                                 />
//                                 <p class="producttext">${product[i].description}</p>
//                                 <p>${product[i].gender}</p>
//                                 <p><span class="price">$ ${product[i].price}</span></p>
//                                 <div class="button-product">
//                                     <a href="./../../Spesific.HTML" class="button">Check it out</a>
//                                 </div>
//                             </section>`;
//     }
// }