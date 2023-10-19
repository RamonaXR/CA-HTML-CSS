import { createHtmlHome, products } from "./../renderHTML/renderHtmlHome.js";

export const lightweight = document.querySelector(".lightweight-products");
export const extreme = document.querySelector(".extreme-products");

createHtmlHome(products, lightweight);