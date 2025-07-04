const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Hide all content
    contents.forEach(c => c.classList.add('hidden'));

    // Activate current
    tab.classList.add('active');
    const target = tab.getAttribute('data-tab');
    document.querySelector(`.${target}`).classList.remove('hidden');
  });
});


// Booking 
// Counter functionality
        let adultCount = 1;
        const pricePerAdult = 40000;
        
        const decrementBtn = document.getElementById('decrementBtn');
        const incrementBtn = document.getElementById('incrementBtn');
        const adultCountDisplay = document.getElementById('adultCount');
        const totalPriceDisplay = document.getElementById('totalPrice');

        function updateDisplay() {
            // Update adult count display
            if (adultCount === 1) {
                adultCountDisplay.textContent = '1 ADULT';
            } else {
                adultCountDisplay.textContent = `${adultCount} ADULTS`;
            }
              // Update total price
            const totalPrice = adultCount * pricePerAdult;
            totalPriceDisplay.textContent = `₹ ${totalPrice.toLocaleString('en-IN')}`;
            
            // Update button states
            decrementBtn.disabled = adultCount <= 1;
        }

        // Increment button click
        incrementBtn.addEventListener('click', () => {
            if (adultCount < 10) { // Maximum limit of 10 adults
                adultCount++;
                updateDisplay();
            }
        });

        // Decrement button click
        decrementBtn.addEventListener('click', () => {
            if (adultCount > 1) {
                adultCount--;
                updateDisplay();
            }
        });

        // Initialize display
        updateDisplay();

       //hut green Trekking
       function toggleMonth(monthId) {
            const datesContainer = document.getElementById('dates-' + monthId);
            const arrow = document.getElementById('arrow-' + monthId);
            
            if (datesContainer.classList.contains('expanded')) {
                datesContainer.classList.remove('expanded');
                arrow.classList.remove('rotated');
            } else {
                datesContainer.classList.add('expanded');
                arrow.classList.add('rotated');
            }
        }

        function toggleSection(sectionId) {
            const content = document.getElementById('content-' + sectionId);
            const arrow = document.getElementById('arrow-' + sectionId);
            
            if (content) {
                if (content.classList.contains('expanded')) {
                    content.classList.remove('expanded');
                    arrow.classList.remove('rotated');
                } else {
                    content.classList.add('expanded');
                    arrow.classList.add('rotated');
                }
            }
        }

        // Initialize - show weather section by default
        document.addEventListener('DOMContentLoaded', function() {
            const weatherContent = document.getElementById('content-weather');
            const weatherArrow = document.getElementById('arrow-weather');
            if (weatherContent) {
                weatherContent.classList.add('expanded');
                weatherArrow.classList.add('rotated');
            }
        });


        //activity Filter
 function toggleFilter(filterId) {
            const checkboxes = document.getElementById(filterId);
            const arrow = document.getElementById(filterId + '-arrow');
            
            if (checkboxes.style.display === 'none' || checkboxes.style.display === '') {
                checkboxes.style.display = 'block';
                arrow.innerHTML = '▲';
            } else {
                checkboxes.style.display = 'none';
                arrow.innerHTML = '▼';
            }
        }

        //Payment Card details
         // Predefined data
        const cardData = {
            cardNumber: '1234 1235 1236 1237',
            expiry: '07/28',
            cvv: '123',
            houseNumber: 'Plot no 4,Shalom cottage',
            street: 'Paul Street',
            city: 'Salem',
            postalCode: '636 302',
            country: 'INDIA'
        };
        
        // Functions to fill data on double click
        function fillCardNumber() {
            document.getElementById('card-number').textContent = cardData.cardNumber;
        }
        
        function fillExpiry() {
            document.getElementById('expiry').textContent = cardData.expiry;
        }
        
        function fillCVV() {
            document.getElementById('cvv').textContent = cardData.cvv;
        }
        
        function fillHouseNumber() {
            document.getElementById('house-number').value = cardData.houseNumber;
        }
        
        function fillStreet() {
            document.getElementById('street').value = cardData.street;
        }
        
        function fillCity() {
            document.getElementById('city').value = cardData.city;
        }
        
        function fillPostalCode() {
            document.getElementById('postal-code').value = cardData.postalCode;
        }
        
        function fillCountry() {
            document.getElementById('country').value = cardData.country;
        }

        //adlogin form
          const predefinedData = {
            email: "selanseraphina@gmail.com",
            password: "************"
        };

         // Get input elements
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        // Add double-click event listener to email input
        emailInput.addEventListener('dblclick', function() {
            this.value = predefinedData.email;
            this.style.borderColor = '#4a90a4';
            this.style.backgroundColor = '#f0f8ff';
            
            // Reset border color after 2 seconds
            setTimeout(() => {
                this.style.borderColor = '#ddd';
                this.style.backgroundColor = 'white';
            }, 2000);
        });

        // Add double-click event listener to password input
        passwordInput.addEventListener('dblclick', function() {
            this.value = predefinedData.password;
            this.style.borderColor = '#4a90a4';
            this.style.backgroundColor = '#f0f8ff';
            
            // Reset border color after 2 seconds
            setTimeout(() => {
                this.style.borderColor = '#ddd';
                this.style.backgroundColor = 'white';
            }, 2000);
        });
//phone number autofill
 const predefinedPhone = "+91 90000 90000";

        // Get the phone input element
        const phoneInput = document.getElementById('phoneNumber');

        // Add double-click event listener
        phoneInput.addEventListener('dblclick', function() {
            this.value = predefinedPhone;
            
            // Optional: Add visual feedback
            this.style.borderColor = '#4a90a4';
            this.style.backgroundColor = '#e8f5e8';
            
            // Reset styles after 2 seconds
            setTimeout(() => {
                this.style.borderColor = '#ddd';
                this.style.backgroundColor = '#f8f9fa';
            }, 2000);
        });