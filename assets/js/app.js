// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners(){
    // Sending the form
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}


// Functions
function agregarTweet(e) {
    e.preventDefault();
    // Read the value of the textarea
    const tweet = document.getElementById('tweet').value;
    // Create element and add the context to the list
    const li = document.createElement('li');
    li.innerHTML = tweet;
    listaTweets.appendChild(li);

    console.log(tweet);
}