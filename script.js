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


// Function to show the content for a specific category
function showCategory(category) {
    // Hide all category contents
    var allContents = document.querySelectorAll('.category-content');
    allContents.forEach(content => {
        content.style.display = 'none';
    });

    // Deactivate all buttons
    var allButtons = document.querySelectorAll('.btn-custom');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the content for the selected category
    document.getElementById(category + 'Content').style.display = 'block';

    // Activate the clicked button
    document.getElementById(category).classList.add('active');
}

// Set a default category to be displayed
showCategory('mostPopular');


    // Show the modal when the page is loaded
    document.addEventListener('DOMContentLoaded', function () {
        var myModal = new bootstrap.Modal(document.getElementById('saleModal'));
        myModal.show();
    });