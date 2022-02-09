fetch("https://seo-fast-audit.p.rapidapi.com/scraper?url=https%3A%2F%2Fkeepinspiring.me/quote-of-the-day/%2F&selector=blockquote>p", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "seo-fast-audit.p.rapidapi.com",
            "x-rapidapi-key": "b5b2ec9656msh285edf6f388e087p1f0c5ajsn3b5bb3db591c"
        }
    })
    .then(response => response.json())
    .then((data) => {
        let quote = document.getElementById("quote")
        quote.innerHTML = `${data.result[0]}`
    });

fetch("https://seo-fast-audit.p.rapidapi.com/scraper?url=https%3A%2F%2Fkeepinspiring.me/quote-of-the-day/%2F&selector=blockquote>cite", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "seo-fast-audit.p.rapidapi.com",
            "x-rapidapi-key": "b5b2ec9656msh285edf6f388e087p1f0c5ajsn3b5bb3db591c"
        }
    })
    .then(response => response.json())
    .then((data) => {
        let author = document.getElementById("author")
        author.innerHTML = `${data.result}`
    });