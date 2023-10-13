import { getProducts } from "./js/fetchAPI.js";

let products = await getProducts();

console.log(products)
