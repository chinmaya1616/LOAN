document.getElementById('calculate').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const years = parseInt(document.getElementById('years').value) * 12;

    const loadingElement = document.getElementById('loading');
    const resultsElement = document.querySelector('.results');

    if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
        alert('Please enter valid numbers!');
        return;
    }

    // Show loading animation
    loadingElement.style.display = 'block';
    resultsElement.style.display = 'none';

    setTimeout(() => {
        const x = Math.pow(1 + rate, years);
        const monthly = (amount * x * rate) / (x - 1);

        if (isFinite(monthly)) {
            document.getElementById('monthly-payment').textContent = `₹${monthly.toFixed(2)}`;
            document.getElementById('total-payment').textContent = `₹${(monthly * years).toFixed(2)}`;
            document.getElementById('total-interest').textContent = `₹${((monthly * years) - amount).toFixed(2)}`;
        } else {
            document.getElementById('monthly-payment').textContent = '₹0';
            document.getElementById('total-payment').textContent = '₹0';
            document.getElementById('total-interest').textContent = '₹0';
        }

        // Hide loading and show results
        loadingElement.style.display = 'none';
        resultsElement.style.display = 'block';
    }, 1500); // Simulate a delay for calculation
});