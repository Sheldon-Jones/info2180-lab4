document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');

    
    const userInput = document.getElementById('input'); //this variabl stores user input
    const resultDiv = document.getElementById('result'); //this variable stores the result from the php

    searchBtn.addEventListener('click', function() {
        const query = userInput.value.trim();
        
       
        resultDiv.innerHTML = '<div class="loading">LOADING...</div>';
        
        
        fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log(response.text);
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

     
    function printResults(data, query) { //this function prints the search results
        console.log(data);
        console.log(query);
        if (data.includes('Superhero not found')) {
            resultDiv.innerHTML = '<div class="error-message">SUPERHERO NOT FOUND</div>';
        } else if (query === '') {
            resultDiv.innerHTML = data;
        } else {
            resultDiv.innerHTML = `<div class="superhero-detail">${data}</div>`;
        }
    }

    
    userInput.addEventListener('keypress', function(event) { //allows user to search with enter button in case of no mouse
        if (event.key === 'Enter') {
            searchBtn.click();
        }
    });
});
