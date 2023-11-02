import { getProductById } from "../data/fetchSingle.js"
import { createHtmlForProduct } from ".createJacket.js"
import { createJacket } from "./createJacket.js";


export let product = await getProductById();
export const title = document.querySelector("title");

console.log(product);


export function createHtmlForProduct (product, parent) {
    createJacket(product, parent);
    title.innerHTML = `${product.title}`;
    
}


