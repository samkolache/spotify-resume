//created an app on GIHPYS Dev site and made a variable to hold a key
let myKey = 'XB1UD6Hsae9lcgcWiV2pbJyD4PBE6B9Z';

//event listener when the document is full parsed, run the init function
document.addEventListener("DOMContentLoaded", init);
function init() {
    //when you click the search button
    document.getElementById("btnSearch").addEventListener("click", ev => {
        //prevent the form from submitting
        ev.preventDefault();
        //create variables for the API URL and the input from the user
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&limit=1&q=`;    
        let str = document.getElementById("search").value.trim();
        //add the user input to the ending of the URL
        url = url.concat(str);
        //request data from the API
        fetch(url)
        //success of the call, make the response as a JSON object
        .then(response => response.json())
        //add the SRC to the image using DOM
        .then(content => {
          let myImg = document.querySelector('.gif');
          myImg.src = content.data[0].images.downsized.url;
        })
        //find possible errors
        .catch(err => {
          console.error(err);
        });
    });
}