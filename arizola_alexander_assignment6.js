/**
 * Assignment 6
 * Name: Alexander Arizola
*/
const validateCreditCard = str => {
    const cardNumber = str.split('-').join('');
    if (!/^\d{16}$/.test(cardNumber)) { // ENSURE THE CARD NUMBER IS 16 DIGITS
        return false;
    }

    // CHECK FOR UNIQUENESS
    if (new Set(cardNumber).size < 2) {
        return false;
    }

    // ENSURE FINAL DIGIT IS EVEN
    if (parseInt(cardNumber[15]) % 2 !== 0) {
        return false;
    }

    // Check if the sum of all the digits is greater than 16
    const sumOfDigits = cardNumber.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    return sumOfDigits <= 16 ? false : true;
}

if (!validateCreditCard(`9999-9999-8888-0000`)) {

    console.log(`Fails the validation.`);

    return;

}

if (!validateCreditCard(`6666-6666-6666-1666`)) {

    console.log(`Fails the validation.`);

    return;

}

if (validateCreditCard(`a923-3211-9c01-1112`)) {

    console.log(`Fails the validation.  The given credit card SHOULD be invalid: a923-3211-9c01-1112`);

    return;

}

if (validateCreditCard(`4444-4444-4444-4444`)) {

    console.log(`Fails the validation.  The given credit card SHOULD be invalid: 4444-4444-4444-4444`);

    return;

}

if (validateCreditCard(`1111-1111-1111-1110`)) {

    console.log(`Fails the validation.  The given credit card SHOULD be invalid: 1111-1111-1111-1110`);

    return;

}

if (validateCreditCard(`6666-6666-6666-6661`)) {

    console.log(`Fails the validation.  The given credit card SHOULD be invalid: 6666-6666-6666-6661`);

    return;

}

class Item {
    constructor(name, price, taxable = false) {
        this.name = name;
        this.price = price;
        this.taxable = taxable;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }
}

getTotalPrice = (shoppingCart) => {
    let totalPrice = 0;
    for (const item of shoppingCart.items) {
        if (item.taxable) {
            totalPrice += item.price * 1.10;
        } else {
            totalPrice += item.price;
        }
    }
    return totalPrice;
}

const item1 = new Item("apple", 5);// apple is the name, 5 is the price

const item2 = new Item("carrot", .45);

const item3 = new Item("shirt", 55);

 

const cart = new ShoppingCart();

cart.addItem(item1);

cart.addItem(item2);

cart.addItem(item3);

if (getTotalPrice(cart) - 60.45 > 0.01) {

    console.log(`Fail the shopping cart: expected 60.45 but got ${getTotalPrice(cart)}`);

    return;

}

console.log(`Passed all tests. Congrats you survive the 6th round in the Squid Game`);
