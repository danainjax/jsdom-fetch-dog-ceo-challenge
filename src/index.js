// set the container and the image url as constants so you have access to them
const imgURL = "https://dog.ceo/api/breeds/image/random/4" 
const container = document.getElementById('dog-image-container')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ul = document.getElementById('dog-breeds');
console.log(ul);

ul.addEventListener('click', (event) => {
  if (event.target.style.color === 'red') {
    event.target.style.color ='black'
  } else {
  event.target.style.color = 'red';
}
})
//Challenge 1
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array  

//now fetch the imgURL
function getImages() {
  fetch(imgURL)
  .then(response => response.json())
  .then(images =>  {
    const imgs = images.message
    let imgsArray = imgs.map((img) => {
      let i = `<img src=${img}>`
      return i
    })
    imgsArray.forEach(element => {
      container.innerHTML += element 
    })
})
}

 
//pass in the imgURL to the fetch method
  
  //cors response with url then JSONify to an array
  //returns a Promise object - Array
  
    //NOW what is the data structure??
    //images returns a message and an object which is an array
    // debugger;
    // grab each image url as a string and get the return from it
    
    //this is the images array returned from the message
    // set a variable for the img array below
    // map over it to get a new array of image elements
    
    
      //this is the new images array after we change it to image tag elements for each image in the array
      //using template literal to create the image tag
      
      //return is very important in map, because does not modify until it sees what return is
      
      
        //for each element in the imgs Array, which is now an image tag, append each image tag to the container element
          
          //  += means every time it iterates over the array it ADDS the next element to the container. otherwise if just a plus overwrites existing element.
          //for template literals need .innerHtml +=  otherwise will recognize as a string not a node
      
  
  
    
    
  
 
  
  // // - on page load, fetches all the dog breeds using the url above ⬆️
  // // - adds the breeds to the page in the `<ul>` provided in `index.html`
  function getBreeds() {
    fetch(breedUrl)
  //pass in the imgURL to the fetch method
    .then(response => response.json())
    .then(breeds => {
      console.log(breeds)
      //breeds returns a message and object of arrays(plural)
      const breedsArray = Object.keys(breeds.message);
      const breedsLis = createLiElement(breedsArray);
      breedsLis.forEach(element => {
        console.log(element)
        ul.innerHTML += (element) 
      })
      
      
      
    })

  }


  function createLiElement(breedsArray) {
      return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`;
        return li
        console.log(li)
        
        // ul.append(breed);
      })
    }

  getImages()
  getBreeds()

//   CHALLENGE 3 Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.

// When the user clicks any of the dog breed list items, the color the text should change.


