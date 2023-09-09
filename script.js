// API -> https://superheroapi.com/api.php/1482801162480246
const TOKEN_ID = 1482801162480246
const BASE_URL = `https://superheroapi.com/api.php/${TOKEN_ID}`
const btnDiv = document.getElementById('btn')
const imgDiv = document.getElementById('image')
const searchDiv = document.getElementById('search')
const searchInputDiv = document.getElementById('searchInput')
const getSuperHero = () => {
    const id = Math.floor(Math.random()*731)+1
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        const stats = getstatsHTML(json)
        const name1 = `<h1>${json.name}</h1>`
    imgDiv.innerHTML = `${name1}<img src= "${json.image.url}"  width = 200px height = 200px id="image1"> ${stats.toUpperCase()}`
})
}
const getHeroByName = (name) =>{
    console.log(searchDiv.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        // const stats = getstatsHTML(json)
        console.log(json)
        let name
        if(json.response != 'error'){
        name = `<h1>${json.results[0].name}</h1>`}
        if(json.response != 'error'){
    imgDiv.innerHTML = `${name} <img src="${json.results[0].image.url}" width = 200px height = 200px id="image1">`
}else{
    imgDiv.innerHTML = `<img src="image-not-found.jpg" alt="NOT-FOUND" width = 200px height = 200px id="image1">`
    }})
}
const getstatsHTML = (character) =>{
    const stats = Object.keys(character.powerstats).map(stat =>{
        return `<p>${stat}:${character.powerstats[stat]}</p>`})
        return stats.join('')
}
btnDiv.onclick = () => getSuperHero()
searchDiv.onclick = () => getHeroByName(searchInputDiv.value)