const API_KEY = "anEOksmiWIM1hHAb8gblbA==DNaZGpTxPQ1jA2Ck"
const api_url = `https://api.api-ninjas.com/v1/quotes?category=inspirational`

const quote = document.getElementById("quote")
const author = document.getElementById("author")
const twitter = document.getElementById("twitter")
const newQuote = document.getElementById("new-quote")
const faQuoteLeft = document.getElementsByClassName("fa-quote-left")
const quoteFontContainer = document.getElementById("quoteFont-container")
const textContainer = document.getElementById("text-container")

quoteFontContainer.style.visibility = "hidden"
textContainer.style.visibility = "hidden"

const getQuotes = () => {
    fetch(api_url, {
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY
        },
        contentType: 'application/json'
    })
    .then(response => {
        if(!response.ok){
            throw new Error("Could not find shit")
        }
        if(response.ok){
            quoteFontContainer.style.visibility = "visible"
            textContainer.style.visibility = "visible"
        }
        return response.json()
    })
    .then(data => {
        quote.textContent = data[0].quote
        author.textContent = data[0].author
    })
}

const tweetQuote = () => {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`
    window.open(twitterURL, '_blank')
}

newQuote.addEventListener('click', getQuotes)
twitter.addEventListener('click', tweetQuote)

getQuotes()