document.addEventListener("DOMContentLoaded", function(){

console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const imageContainer = document.querySelector('#dog-image-container')
const breedContainer = document.querySelector('#dog-breeds')
const breedFilter = document.querySelector('#breed-dropdown')

//Fetch and render dogs images
function getDogsImages(){
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json =>  renderDogsImages(json))
}

function renderDogImage(image){
    const imageElement = document.createElement('img')
    imageElement.src = image 
    imageContainer.append(imageElement)
}

function renderDogsImages(images){
    images.message.forEach(image => renderDogImage(image))
}

//Fetch and render dogs breeds
function getBreeds(){
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json))
}

function renderBreed(breed){
    const breedElement = document.createElement('li')
    breedElement.classList.add('breedEl')
    breedElement.innerHTML = breed
    //Change font color on click
    breedElement.style.color = 'black'
    breedElement.addEventListener('click', (e) => breedElement.style.color = 'pink')
    breedContainer.append(breedElement)
}

function renderBreeds(breeds){
    const breedsItem = Object.keys(breeds.message)
        breedsItem.forEach(breed => renderBreed(breed))
}

// Filter dog breed by dropdown filter
function dropDownFilter(){
    breedFilter.addEventListener('change', function(e) {
        const breedsEls = document.getElementsByClassName('breedEl')
            for(let i = 0; i < breedsEls.length; ++i){
                console.log(breedFilter)
                if(breedsEls[i].innerHTML.charAt(0) === breedFilter.value){
                    breedsEls[i].style.display = 'block'
                }else{
                    breedsEls[i].style.display = 'none'
                }
            }
    })
}

getDogsImages()
getBreeds()
dropDownFilter()

})
