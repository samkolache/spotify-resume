let myKey = 'XB1UD6Hsae9lcgcWiV2pbJyD4PBE6B9Z';

document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&limit=1&q=`;    
        let str = document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data);
          console.log("META", content.meta);
          let myImg = document.querySelector('.gif');
          myImg.src = content.data[0].images.downsized.url;
        })
        .catch(err => {
          console.error(err);
        });
    });
}