export function getAllModelos5 (){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=jackson&limit=5")
    .then(res=>res.json())
    .catch (error=>console.log(error))
}