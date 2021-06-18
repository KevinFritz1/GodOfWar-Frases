let twitterBtn = document.getElementById("button-twitter");
let buttonNext = document.getElementById("button-next");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let quoteContainer  = document.getElementById("quote-container");
let loader = document.getElementById("loader");



function tweetConsole () {
    console.log("voce clicou no botao") 
}

function tweetQuote () {
    window.open ('https://twitter.com/intent/tweet?text=' + quote.
    textContent + " - " + author.textContent, '_blank')
}

function onLoading () {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function onComplete () { 
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function newQuote () {
    onLoading() ;
    let posicao = Math.floor(Math.random() * quotes.length);
    if (quotes[posicao].text.length > 100) { 
    quote.classList.add("long-quote");
    } else { 
    quote.classList.remove("long-quote");

    }
   quote.textContent = quotes[posicao].text;
   author.textContent = quotes[posicao].author;
    onComplete () ;
}

async function getQuotes() {
    onLoading();
    let url = 'https://run.mocky.io/v3/59760741-fc66-4694-a510-8303d34ba201';
    try {
        let response = await fetch(url);
        quotes = await response.json();
        newQuote();
    } catch (error) { 
        quote.textConten = "Na minha maquina funciona..."
    author.textContent = "Um programador"
    onComplete();
    
    }
}
twitterBtn.addEventListener("click",tweetQuote)
buttonNext.addEventListener ("click",newQuote )
getQuotes();