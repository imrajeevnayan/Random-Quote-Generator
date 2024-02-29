function getRandomQuote() {
    const quoteElement = document.getElementById("quote");

    // Example API endpoint (replace with a real quote API)
    const apiUrl = "https://api.quotable.io/random";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const quote = `"${data.content}" - ${data.author}`;
            quoteElement.textContent = quote;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            quoteElement.textContent = "Failed to fetch a quote. Please try again later.";
        });
}
