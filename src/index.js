
const imgURL = "https://dog.ceo/api/breeds/image/random/4" 
const container = document.getElementById('dog-image-container')

//Challenge 1
fetch(imgURL)
  .then(response => response.json())
  .then(images =>  {
    const imgs = images.message
    
    
    let imgsArray = imgs.map((img) => {
      let i = `<img src=${img}>`
      console.log(i);
      return i
      console.log(imgsArray);
    }) 

    imgsArray.forEach(element => {
      console.log(container)
        container.innerHTML += element 
      })
       
     
  })   
    
   
 
  //for template literals need .innerHtml +=  otherwise will recognize as a sting not a node

    // fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array  


