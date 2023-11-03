import { createHtmlHome, products } from "./../renderHTML/renderHtmlHome.js";
import { getProductIdFromURL } from "../utility/productUtility.js";
import { fetchProduct } from "../data/fetchSingle.js";
import { selectJackets } from "../data/selectJackets.js";

export const lightweight = document.querySelector(".lightweight-products");

const id = getProductIdFromURL();
export const spesificContainer = document.querySelector(".container-spesific");
export const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;

const jacketContainer = document.querySelector(".homepage-jackets");
export const title = document.querySelector("title");


function renderJackets(jackets) {
    jacketContainer.innerHTML = "";
    for(let i = 0; i < 3; i++) {
        jacketContainer.innerHTML += `<img src="${jackets[i]}" alt="jackets"/>`
    }
}

switch (location.pathname) {
    case "/product":
        try {
            createHtmlHome (products, lightweight);
        } catch (error) {
            console.log(error);
        }
        break; 
    case "/Spesific":
        fetchProduct ();
        break;
    default:
        const e = selectJackets(products);
        renderJackets(e);
        //selectJackets(products);
        break;
}



//switch (location.pathname) {
    //case "/Product.html":
        //try {
            //createHtmlHome (products, lightweight);
        //} catch (error) {
            //console.log(error);
        //}
        //break; 
    //case "/Spesific.HTML":
        //fetchProduct ();
        //break;
    //case "/Index.html":
        //const e = selectJackets(products);
        //renderJackets(e);
        //selectJackets(products);
        //break;
//}


