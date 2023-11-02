import { createHtmlForProduct } from "./../renderHTML/createJacket.js";
import { createHtmlHome, products } from "./../renderHTML/renderHtmlHome.js";
import { getProductIdFromURL } from "./../utility/productUtility.js";

export const lightweight = document.querySelector(".lightweight-products");
export const extreme = document.querySelector(".extreme-products");

createHtmlHome(products, lightweight);



getProductIdFromURL ();

