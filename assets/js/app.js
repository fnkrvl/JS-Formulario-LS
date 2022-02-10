// Variables
const listTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners(){
    // Sending the form
    document.querySelector('#formulario').addEventListener('submit', addTweet)

    // Delete tweets
    listTweets.addEventListener('click', deleteTweet)

    // Loaded content
    document.addEventListener('DOMContentLoaded', localStorageLoaded)
}


// Functions
// Add tweet
function addTweet(e) {
    e.preventDefault();
    // Read the value of the textarea
    const tweet = document.getElementById('tweet').value
    // Create delete button
    const deleteButton = document.createElement('a')
    deleteButton.classList = 'delete-tweet'
    deleteButton.innerText = 'X'

    // Create element and add the content to the list
    const li = document.createElement('li')
    li.innerText = tweet;
    // Add the delete button to the tweet
    li.appendChild(deleteButton)
    // Add the tweet to the list
    listaTweets.appendChild(li)

    // Add to Local Storage
    addTweetToLocalStorage(tweet)

}


// Delete tweet from DOM
function deleteTweet(e) {
    e.preventDefault()
    if (e.target.className === 'delete-tweet') {
        e.target.parentElement.remove()
        deleteTweetLocalStorage(e.target.parentElement.innerText)
     }
}


// Show data of the LocalStorage on the list
function localStorageLoaded(){
    let tweets

    tweets = getTweetToLocalStorage()

    tweets.forEach(function(tweet) {
        // Create delete button
        const deleteButton = document.createElement('a')
        deleteButton.classList = 'delete-tweet'
        deleteButton.innerText = 'X'

        // Create element and add the content to the list
        const li = document.createElement('li')
        li.innerText = tweet
        // Add the delete button to the tweet
        li.appendChild(deleteButton)
        // Add the tweet to the list
        listaTweets.appendChild(li);
    });
}


// Add to Local Storage
function addTweetToLocalStorage(tweet){
    let tweets = getTweetToLocalStorage()
    // Add the new tweet
    tweets.push(tweet)
    // Convert from string to local storage
    localStorage.setItem('tweets', JSON.stringify(tweets))
}


// Get the Local Storage
function getTweetToLocalStorage(){
    let tweets
    // We reviewed the values of the storage facility
    if (localStorage.getItem('tweets') === null){
        tweets = []
    }
    else{
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }
    return tweets
}


function deleteTweetLocalStorage(tweet) {
    let tweets, tweetToDelete;
    // Delete the X from the tweet
    tweetToDelete = tweet.substring(0, tweet.length - 1)
    
    tweets = getTweetToLocalStorage();

    tweets.forEach(function(tweet, index){
        if (tweetToDelete === tweet){
            tweets.splice(index, 1)
        }
    });

    localStorage.setItem('tweets'), JSON.stringify(tweets);
}