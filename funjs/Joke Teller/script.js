const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable | Enable Button
function toggleButton() {
	button.disabled = !button.disabled;
}

// VoiceRSS Speech Function
function tellMe(joke) {
	const jokeString = joke.trim().replace(/ /g, '%20');
	// VoiceRSS Speech Parameter
	VoiceRSS.speech({
		key: 'e985f868e96c46d9b0789c3855350152',
		src: jokeString,
		hl: 'en-us',
		r: 0,
		c: 'mp3',
		f: '44khz_16bit_stereo',
		ssml: false,
	});
}

// Get jokes from Joke API
async function getJokes() {
	let joke = '';
	const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist';
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		// Assign One or Two part Joke
		if (data.setup) {
			joke = `${data.setup} ... ${data.delivery}`;
		} else {
			joke = data.joke;
		}
		// Passing joke to VoiceRSS API
		tellMe(joke);
		// Disabled Button
		toggleButton();
	} catch (error) {
		// Catch Error Here
	}
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);