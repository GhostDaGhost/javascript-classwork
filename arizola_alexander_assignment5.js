/**
 * Assignment 5
 * Name: Alexander Arizola
*/

/**
    * This function counts numbers of vowels.
    * @param {string} str The string in order to count the vowels of.
    * @return {number} The count of vowels of the provided string.
*/
countVowels = str => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // ITERATE OVER EACH CHARACTER IN THE STRING
    let countOfVowels = 0;
    for (const character of str) {
        if (vowels.has(character)) {
            countOfVowels++;
        }
    }

    // RETURN FINAL COUNT OF VOWELS
    return countOfVowels;
}

/**
    * This function prints the number of times the search keyword occurs in s.
    * @param {string} str The string to search.
    * @param {string} substr The substring to search.
    * @return {number} The number of times the substring occurs in the string.
*/
countSubString = (str, substr) => {
    let count = 0;
    let position = str.indexOf(substr);

    // UPDATE POSITION WITHN THE STRING
    while (position !== -1) {
        count++;
        position = str.indexOf(substr, position + 1);
    }

    // RETURN FINAL COUNT OF KEYWORD
    return count;
}

if (countVowels(`azcbobobegghakl`) !== 5) {
    console.log(`FAIL countVowels test expect 4 but got ${countVowels(`azcbobobegghakl`)}`);
}

if (countVowels(``) !== 0) {
    console.log(`FAIL countVowels test expect 0 but got ${countVowels(``)}`);
    return;
}

if (countSubString(`azcbobobegghakl`, `bob`) !== 2) {
    console.log(`FAIL countSubString test expect 2 but got ${countSubString(`azcbobobegghakl`, `bob`)}`);
}

if (countSubString(`azcbobobegghakl`, `rrr`) !== 0) {
    console.log(`FAIL countSubString test expect 0 but got ${countSubString(`azcbobobegghakl`, `rrr`)}`);
    return;
}

console.log(`Passed all tests! Congrats you just past the 5th round of the Squid Game`);
