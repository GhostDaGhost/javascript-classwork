/**
 * Assignment 4
 * Name: Alexander Arizola
*/
const cipher = (plainText, shift_distance) => { 
    return encrypt(plainText, shift_distance);// replace it with the actual value
}

const decipher = (encryptedText, shift_distance) => { 
    return encrypt(encryptedText, shift_distance);
}

const encrypt = (text, distance) => {
    //if the character is letter perform the shifting.  Otherwise, return it
    return text.split('').map(char => shiftCharacter(char, distance)).join('');
}

const shiftCharacter = (char, distance) => {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + distance) % 26 + 26) % 26 + 97);
    } else if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + distance) % 26 + 26) % 26 + 65);
    }
    return char; //otherwise, return the character without shifting.
}

/**

 * DO NOT MODIFY the following unit tests.  Make sure to pass all unit tests

 */

const tests = [`HeLLoWorld`,'AzzZ', '$rsdftest1234'];

const distance = 3;

tests.forEach(str => {

    if (decipher(cipher(str, distance), -distance) !== str) {

        console.log(`testing ${str}`);

        console.log(`testing cipher ${cipher(str, distance)}`);

        console.error(`Fail the test expected to match ${str} but got ${decipher(cipher(str, distance), -distance)}`);

        return;

    }

});

console.log(`Congrats your code passes all the test and you survive the 4th round of the Squid Game`);
