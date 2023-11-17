        // Get the container element
        var perfumeContainer = document.getElementById('perfumeList');
    
        // Function to calculate discounted price
        function getDiscountedPrice(perfume, discounts) {
          // Check if discounts are defined for the selected brand
          if (discounts[perfume.brand] !== undefined) {
            var discountPercentage = discounts[perfume.brand];
            var discountAmount = (discountPercentage / 100) * parseFloat(perfume.price);
            var discountedPrice = parseFloat(perfume.price) - discountAmount;
            return `$${discountedPrice.toFixed(2)}`;
          } else {
            // If no discount is defined, return the original price
            return `$${parseFloat(perfume.price).toFixed(2)}`;
          }
        }
    
        // Load perfume data from perfumes.json
        fetch('perfumes.json')
          .then(response => response.json())
          .then(perfumeData => {
            // Load discount data from discounts.json
            return fetch('discounts.json')
              .then(response => response.json())
              .then(discounts => ({ perfumeData, discounts }));
          })
          .then(({ perfumeData, discounts }) => {
            // Replace 'selectedBrand' with the brand you want to display //importants here
            var selectedBrand = 'LuxuryScents';
    
            // Filter perfumes for the selected brand
            var perfumesForBrand = perfumeData.filter(perfume => perfume.brand === selectedBrand);
    
            // Loop through the filtered perfumes and create perfume cards
            for (var i = 0; i < perfumesForBrand.length; i++) {
              var perfume = perfumesForBrand[i];
    
              // Create a perfume card
              var card = document.createElement('div');
              card.className = 'col';
              card.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="/Images/${perfume.image}" class="card-img-top img-fluid" style="height:15rem;" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${perfume.name}</h4>
                        <h6 class="card-text">${perfume.brand}</h6>
                        <p class="card-text text-decoration-line-through">$${perfume.price}</p>
                        <p class="card-text fw-bolder fs-4 text-center">${getDiscountedPrice(perfume, discounts)}</p>
                    </div>
                </div>
              `;
    
              // Append the perfume card to the container
              perfumeContainer.appendChild(card);
            }
          })
          .catch(error => console.error('Error fetching data:', error));