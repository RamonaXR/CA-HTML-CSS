import { createJacket } from "./../renderHTML/createJacket.js";
import { url, spesificContainer } from "../products/index.js";

// Single jacket 

export async function fetchProduct () {
    try {
        const response = await fetch(url);
        const details = await response.json();
        createJacket(details, spesificContainer);
      return details;
    } catch (error) {
        console.log(error);
        
    }
}



