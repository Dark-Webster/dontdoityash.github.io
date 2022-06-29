const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

//loading spinner shown
function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

//Remove loading spinner
function complete() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}

// Show new quote
function newQuote() {
	loading();
	// Pick a random quote from array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	// Check if author field is blank and replace it with 'Unknown'
	if (!quote.author) {
		authorText.textContent = 'Unknown';
	} else {
		authorText.textContent = quote.author;
	}
	// Check quote length to determine styling
	if (quote.text.length > 120) {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}
	// Set Quote, Hide Loader
	quoteText.textContent = quote.text;
	complete();
}

// Get Quotes From API
async function getQuotes() {
	loading();
	const apiUrl = 'https://type.fit/api/quotes';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// Catch Error Here
	}
}

// Tweet Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
	window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();