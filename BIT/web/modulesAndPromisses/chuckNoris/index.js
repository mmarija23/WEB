const main = document.querySelector('#main');
const btn = document.querySelector('#btn');

const url = 'https://api.chucknorris.io/jokes/random';

const getJoke = () => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            let joke = myJson.value;
            //let p = document.createElement('p');//ovako on samo dodaje novi joke jedan ispod drugog
            //p.textContent = joke;//a ne brise stari;ovo zakomentarisano nije potrebno
            main.textContent = joke; //ovo smo setovali da bi na svaki klik brisao prethodni joke i izbacio novi
        })
}

btn.addEventListener('click', getJoke);