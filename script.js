const joke = document.getElementById('joke');
const jokebutton = document.getElementById('jokesbtn')

jokebutton.addEventListener('click', genertatequote);


genertatequote()



function genertatequote() {

    fetch('https://api.kanye.rest').then((res) => res.json()).then((data) => {
        joke.innerHTML = data.quote;
    });

}