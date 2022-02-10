// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners(){
    // Sending the form
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    // Delete tweets
    document.addEventListener('click', deleteTweet);
}


// Functions
function agregarTweet(e) {
    e.preventDefault();
    // Read the value of the textarea
    const tweet = document.getElementById('tweet').value;
    // Create delete button
    const deleteButton = document.createElement('a');
    deleteButton.classList = 'delete-tweet';
    deleteButton.innerText = 'X';

    // Create element and add the content to the list
    const li = document.createElement('li');
    li.innerText = tweet;
    // Add the delete button to the tweet
    li.appendChild(deleteButton);
    // Add the tweet to the list
    listaTweets.appendChild(li);

}


function deleteTweet(e) {
    if (e.target.className === 'delete-tweet') {
        e.preventDefault();
        e.target.parentElement.remove();
     }
}