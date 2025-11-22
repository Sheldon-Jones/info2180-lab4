
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn'); //gets search button element from html and store in searchBtn

    
    const userInput = document.getElementById('userInput'); //gets userInput element from html and store in userInput
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', function() {  //search button functionality
        const query = userInput.value.trim();
        
        
        resultDiv.innerHTML = '<div class="loading">Searching...</div>';
        
        
        fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                printResults(data, query);
            })
            
            .catch(error => {
                console.error('Error:', error);
                
                alert('Error fetching superhero data');
                resultDiv.innerHTML = '<div class="error-message">Error fetching data. Please try again.</div>';
            });
    });

     
    function printResults(data, query) {
        if (data.includes('Superhero not found')) {
            resultDiv.innerHTML = '<div class="error-message">SUPERHERO NOT FOUND</div>';
        } else if (query === '') {
            resultDiv.innerHTML = data;
        } else {
            resultDiv.innerHTML = `<div class="superhero-detail">${data}</div>`;
        }
    }

    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});
