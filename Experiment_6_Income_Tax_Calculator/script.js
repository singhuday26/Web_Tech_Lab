function calculateTax() {
    const incomeInput = document.getElementById('income');
    const resultBox = document.getElementById('result');
    const taxableIncomeSpan = document.getElementById('taxable-income');
    const totalTaxSpan = document.getElementById('total-tax');

    let income = parseFloat(incomeInput.value);

    // Validate input
    if (isNaN(income) || income < 0) {
        alert("Please enter a valid positive income amount.");
        return;
    }

    let tax = 0;

    // FY 2025-26 New Regime Rules
    /*
    0 - 4L    : Nil
    4 - 8L    : 5%
    8 - 12L   : 10%
    12 - 16L  : 15%
    16 - 20L  : 20%
    20 - 24L  : 25%
    Above 24L : 30%
    */

    // Tax varies based on cascading slabs

    // Note: The logic commonly used is that if income is > 4L, you pay 5% on income minus 4L, etc.
    // However, income up to 7 Lakh is usually rebate-free (Section 87A) in previous years, 
    // but here we Strictly follow the provided SLAB table without assuming 87A unless specified. 
    // The image just lists Slabs. I will strictly follow the Slabs.

    // BUT usually, if you fall in 0-4L, tax is 0.
    // If you have 5L. Tax on first 4L is 0. Tax on next 1L is 5%. Total = 5000.

    if (income > 2400000) {
        tax += (income - 2400000) * 0.30;
        income = 2400000;
    }
    if (income > 2000000) {
        tax += (income - 2000000) * 0.25;
        income = 2000000;
    }
    if (income > 1600000) {
        tax += (income - 1600000) * 0.20;
        income = 1600000;
    }
    if (income > 1200000) {
        tax += (income - 1200000) * 0.15;
        income = 1200000;
    }
    if (income > 800000) {
        tax += (income - 800000) * 0.10;
        income = 800000;
    }
    if (income > 400000) {
        tax += (income - 400000) * 0.05;
        income = 400000;
    }

    // Format currency
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    });

    taxableIncomeSpan.textContent = formatter.format(parseFloat(incomeInput.value));
    totalTaxSpan.textContent = formatter.format(tax);

    resultBox.style.display = 'block';
}
