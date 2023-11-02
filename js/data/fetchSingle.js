// Single jacket 

const url = "https://api.noroff.dev/api/v1/rainy-days/<id>" 



export async function getProductById(id) {
    console.log(`${id}`); 
    const response = await fetch(`${baseUrl}/${id}`);
    console.log(response); 
    if (!response.ok) {
        throw new Error(`${response.status}`);
    }
    const product = await response.json();
    console.log(product); 
    return product;
}