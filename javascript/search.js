document.getElementById('search-bar').addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const results = document.querySelectorAll('.section-cards .flex-container');
        const noResults = document.getElementById('no-results');

        let anyVisible = false;

        results.forEach(result => {
            const nameElement = result.querySelector('h2');
            if (nameElement) {
                const nameText = nameElement.textContent.toLowerCase();
                const matches = nameText.includes(query);
                result.style.display = matches ? 'block' : 'none';
                if (matches) anyVisible = true;
            }
        });

        noResults.style.display = anyVisible ? 'none' : 'block';
    });