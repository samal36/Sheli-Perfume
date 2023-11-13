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


//cookies modal
document.addEventListener('DOMContentLoaded', function () {
    var cookieModal = new bootstrap.Modal(document.getElementById('cookieModal'), {
        backdrop: 'static',
        keyboard: false
    });

    // Show the cookie modal on page load
    cookieModal.show();

    // Handle the "Accept" button click
    document.getElementById('acceptCookies').addEventListener('click', function () {
        // Add your code here for handling cookie acceptance
        // You may want to set a cookie or perform other actions
        // For now, just close the modal
        cookieModal.hide();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var cookieModal = new bootstrap.Modal(document.getElementById('cookieModal'), {
        backdrop: 'static',
        keyboard: false
    });

    // Show the cookie modal on page load
    cookieModal.show();

    // Handle the "Accept" button click
    document.getElementById('acceptCookies').addEventListener('click', function () {
        // Add your code here for handling cookie acceptance
        // You may want to set a cookie or perform other actions
        // For now, just close the modal
        cookieModal.hide();
    });
});


