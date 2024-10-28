let apiQuotes = [];

async function getQuotes() {
    const api_url = 'https://zenquotes.io/api/quotes';
    
    try {
        const response = await fetch(api_url);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        
    }
}

getQuotes()