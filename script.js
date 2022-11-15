const div = document.querySelector('#gifs');
const rmBtn = document.querySelector('#remove');
const form = document.querySelector('#search-form');
const searchBtn = document.querySelector('#submit');
const searchBar = document.querySelector('#search-bar');

async function appendGif(res){
    let results = res.data.length;
    let newImg = document.createElement('img');
    let idx = Math.floor(Math.random() * results);
    newImg.setAttribute('src', res.data[idx].images.original.url);
    div.append(newImg);
}

form.addEventListener('submit', async function(e){
    e.preventDefault();
    let userSearch = searchBar.value;
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: userSearch,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    searchBar.value = '';
    appendGif(res.data);
});

rmBtn.addEventListener('click', function(e){
    e.preventDefault();
    div.innerHTML = '';
});
