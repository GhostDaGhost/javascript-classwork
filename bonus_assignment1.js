const CalculateBalance = (balance, annualInterestRate, monthlyPayment) => {
    const monthlyInterestRate = annualInterestRate / 12.0;
    for (let i = 0; i < 12; i++) {
        const unpaidBalance = balance - monthlyPayment;
        balance = unpaidBalance + (monthlyInterestRate * unpaidBalance);
    }
    return balance;
}

const FindLowestPayment = (balance, annualInterestRate) => {
    let monthlyPayment = 10;
    while (true) {
        if (CalculateBalance(balance, annualInterestRate, monthlyPayment) <= 0) {
            break;
        } else {
            monthlyPayment += 10;
        }
    }
    return monthlyPayment;
}

const testCases = [
    { balance: 3329, annualInterestRate: 0.2 },
    { balance: 4773, annualInterestRate: 0.2 },
    { balance: 3926, annualInterestRate: 0.2 }
];

for (const testCase of testCases) {
    console.log('Lowest Payment:', FindLowestPayment(testCase.balance, testCase.annualInterestRate));
}
