function calculateTax() {
    const incomeInput = document.getElementById('income');
    const grossIncomeSpan = document.getElementById('gross-income');
    const taxableIncomeSpan = document.getElementById('taxable-income');
    const incomeTaxSpan = document.getElementById('income-tax');
    const cessSpan = document.getElementById('cess');
    const totalTaxSpan = document.getElementById('total-tax');

    const grossIncome = parseFloat(incomeInput.value);
    const standardDeduction = 75000;

    // Validate input
    if (isNaN(grossIncome) || grossIncome < 0) {
        alert("Please enter a valid positive income amount.");
        return;
    }

    let taxableIncome = Math.max(0, grossIncome - standardDeduction);
    let incomeForSlab = taxableIncome;

    let incomeTax = 0;

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

    if (incomeForSlab > 2400000) {
        incomeTax += (incomeForSlab - 2400000) * 0.30;
        incomeForSlab = 2400000;
    }
    if (incomeForSlab > 2000000) {
        incomeTax += (incomeForSlab - 2000000) * 0.25;
        incomeForSlab = 2000000;
    }
    if (incomeForSlab > 1600000) {
        incomeTax += (incomeForSlab - 1600000) * 0.20;
        incomeForSlab = 1600000;
    }
    if (incomeForSlab > 1200000) {
        incomeTax += (incomeForSlab - 1200000) * 0.15;
        incomeForSlab = 1200000;
    }
    if (incomeForSlab > 800000) {
        incomeTax += (incomeForSlab - 800000) * 0.10;
        incomeForSlab = 800000;
    }
    if (incomeForSlab > 400000) {
        incomeTax += (incomeForSlab - 400000) * 0.05;
    }

    const cess = incomeTax * 0.04;
    const finalTax = incomeTax + cess;

    // Format currency
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    });

    grossIncomeSpan.textContent = formatter.format(grossIncome);
    taxableIncomeSpan.textContent = formatter.format(taxableIncome);
    incomeTaxSpan.textContent = formatter.format(incomeTax);
    cessSpan.textContent = formatter.format(cess);
    totalTaxSpan.textContent = formatter.format(finalTax);
}
