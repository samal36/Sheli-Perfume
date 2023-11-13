// Function to hide the div
function hideDiv() {
    myDiv.style.display = 'none';
}

// Set a timer to hide the div after 5 seconds (5000 milliseconds)
setTimeout(hideDiv, 2000);

// do this later ************

setTimeout(function () {
    document.querySelector('#bannerSection').style.display = 'none';
}, 5000);

function showCard(cardId) {
    $('.card').hide(); // Hide all cards
    $('#' + cardId).show(); // Show the selected card
  }