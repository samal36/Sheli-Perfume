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
            var selectedGender = 'mens';
    
            // Filter perfumes for the selected brand
            var perfumesForBrand = perfumeData.filter(perfume => perfume.gender === selectedGender);
    
            // Loop through the filtered perfumes and create perfume cards
            for (var i = 0; i < perfumesForBrand.length; i++) {
              var perfume = perfumesForBrand[i];
    
              // Create a perfume card
              var card = document.createElement('div');
              card.className = 'col';
              card.innerHTML = `
                  <div class="card p-2 rounded-4" style="width: 18rem; transition: color 0.3s;">
                      <img src="/Images/perfumes/${perfume.brand}/${perfume.name}.png" class="card-img-top img-fluid" style="height:15rem;" alt="Image of perfume ${perfume.name} by ${perfume.brand}">
                      <div class="card-body">
                          <h5 class="card-title " id="cardTitle">${perfume.name}</h5>
                          <h6 class="card-text">${perfume.brand}</h6>
                          <p class="card-text text-decoration-line-through">$${perfume.price}</p>
                          <p class="card-text text-center">Starting at <span class="fs-4">${getDiscountedPrice(perfume, discounts)}</span></p>
                      </div>
                  </div>
              `;
              
              // Append the perfume card to the container
              perfumeContainer.appendChild(card);
              
    
              // Append the perfume card to the container
              perfumeContainer.appendChild(card);
            }
          })
          .catch(error => console.error('Error fetching data:', error));