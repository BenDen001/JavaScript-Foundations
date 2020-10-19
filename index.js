function mortgageCalculator(principal, interestRate, years, creditScore) {
    const name = 'Ben';

    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;

    let n1 = Math.pow(1 + monthlyInterestRate, periods);
    let numerator = principal * n1 * monthlyInterestRate;
    let denominator = n1 - 1;
    let monthlyRate = numerator / denominator;

    if (creditScore >= 740) {
        monthlyRate = monthlyRate * 0.95;
    }
    else if (creditScore <= 660) {
        monthlyRate = monthlyRate * 1.05;
    }
    else if (creditScore > 660 && creditScore < 740) {
        monthlyRate = monthlyRate;
    }

    console.log(name + ", your monthly rate is $" + Math.floor(monthlyRate * 100) / 100);
    return principal + interestRate + years;
}
mortgageCalculator(200000, 0.05, 30, 800);

const variableInterestRate = function (principal, interestRate, years) {
    for (let i = interestRate - 0.02; i <= interestRate + 0.02; i += 0.005) {
        const name = 'Ben';

        let monthlyInterestRate = i / 12;
        let periods = years * 12;

        let n1 = Math.pow(1 + monthlyInterestRate, periods);
        let numerator = principal * n1 * monthlyInterestRate;
        let denominator = n1 - 1;
        let monthlyRate = numerator / denominator;

        console.log(`${name}, with an interest rate of ${i.toFixed(3)},
            your monthly rate is $${Math.round(monthlyRate)}`);
    }
}
variableInterestRate(200000, 0.04, 30, 'Ben');
