console.log('%c HI', 'color: firebrick')
const imgURL = "https://dog.ceo/api/breeds/image/random/4" 

document.addEventListener('DOMContentLoaded', function() {
  const data = fetch(imgURL).then(response => response.json());
  data.then(data => console.log(data));
  })
 
  
    // fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array  


