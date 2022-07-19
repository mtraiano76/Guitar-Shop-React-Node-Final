export function getAllModelos (){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=gibson")
    .then(res=>res.json())
    .catch (error=>console.log(error))
}