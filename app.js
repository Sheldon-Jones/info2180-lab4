document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');

    // Q3: Added search input and result div variables
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
    })
});