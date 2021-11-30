import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should take in a argument of a string and return a concat of that string with 3 exclamation points.', (expect) => {
    const expected = 'hello!!!';

    const actual = addExclamationPoints('hello');

    expect.equal(actual, expected, 'this function should return the argument of "hello" concat with the string "!!!" for a value of "hello!!!"');
    expect.equal(typeof actual, 'string', 'this function should return a value with a typeof string');
    expect.equal(actual.includes('!!!'), true, 'it should be true that the return value of this function should include "!!!"');
});


test('multiplyBySeven should take in an argument of a number and return a value of the result of number multiplied by 7', (expect) => {
    const expected = 35;

    const actual = multiplyBySeven(5);

    const expected2 = 70;
    const actual2 = multiplyBySeven(10);

    expect.equal(actual, expected, 'the return value of this function should be the product of an argument num and 7, which equals 35 in this test');
    expect.equal(typeof actual, 'number', 'the return value of this function should be the typeof number');
    expect.equal(actual2, expected2, 'the return value of this function should equal the value of the equation 10 * 7');
});

test('multiplyBy12ThenHalve should take in an argument of a number and return the value of number multiplied by 12 and divided by 2', (expect) => {
    const expected = 60;
    const actual = multiplyBy12ThenHalve(10);

    const expected2 = 90;
    const actual2 = multiplyBy12ThenHalve(15);

    expect.equal(actual, expected, 'this function should return the value of the equation 10  multiplied by 12 and divided by 2, which should be equal to the number 60');
    expect.equal(typeof actual, 'number', 'the return value of this function should be a typeof number');
    expect.equal(actual2, expected2, 'this function should return the value of the equation 15 * 12 /2, which should be equal to 90');
});

test('divideThenMultiply should take in 3 numbers and return a value which is equal to the first number divided by the second and multiplied by the third', (expect) => {
    const expected = 20;
    const actual = divideThenMultiply(6, 3, 10);

    const expected2 = 15;
    const actual2 = divideThenMultiply(7.5, 3, 6);

    const expected3 = 82.8;
    const actual3 = divideThenMultiply(2.3, 0.5, 18);

    expect.equal(actual, expected, 'this function should return the value of the equation 6 / 3 * 10, which should be equal to 20');
    expect.equal(actual2, expected2, 'this function should return the value of the equation 7.5 / 3 * 6, which should be equal to 15');
    expect.equal(actual3, expected3, 'this function should return the value of the equation 2.3 / 0.5 * 18, which should be equal to 82.8');
});

test('returnAsAnArray should take in 3 numbers and return the value of an array of those numbers', (expect) => {

    const expected = [3, 5, 7];
    const actual = returnAsAnArray(3, 5, 7);

    const expected2 = [3.3, 5.55, 0.077];
    const actual2 = returnAsAnArray(3.3, 5.55, 0.077);

    expect.deepEqual(actual, expected, 'this function should take in three numbers, 3, 5, and 7, and return an array value of [3, 5, 7]');
    expect.deepEqual(actual2, expected2), 'this function should take in three numbers, 3.3, 5.55, and 0.077, and return an array value of [3.3, 5.55, 0.077]';
    expect.equal(true, 3 === expected[0] && 5 === expected[1] && 7 === expected[2], 'this function should return an array where the index 0 is equal to 3, the index 1 is equal to 5, and the index 2 is equal to 7');
});

test('returnAsAString should take in 3 numbers and return a string those numbers as a single string', (expect) => {
    const expected = '541';
    const actual = returnAsAString(5, 4, 1);

    const expected2 = '5.054040.11';
    const actual2 = returnAsAString(5.05, 404, 0.11);

    expect.equal(actual, expected, 'this test should return the numbers 5, 4, 1 passed as arguments to the function and return the string "541"');
    expect.equal(actual2, expected2, 'this test should return the numbers 5.05, 405, 0.11 passed as arguments to the function and return the string "5.054040.11"');
    expect.equal('string', typeof expected, 'this test should return true for typeof expected to be equal to string');
});

test('makeLuckyGreeting should return a string concatenated with the value of two numbers passed as arguments', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 33.';
    const actual = makeLuckyGreeting(3, 3);

    const expected2 = 'Hello! Your lucky number for the day is 18.';
    const actual2 = makeLuckyGreeting(1, 8);

    expect.equal(expected, actual, 'this function should return a string concatenated with two numbers 3, 3');
    expect.equal(expected2, actual2, 'this function should return a string concatenated with two numbers 1, 8');
    expect.equal(typeof expected, 'string', 'this test should return true that the typeof expected is equal to string');
});

test('getSecondItem should take in an array and return the value of the array item in the second index', (expect) => {
    const expected = 'cat';
    const actual = getSecondItem(['dog', 'cat', 'goldfish']);

    const expected1 = 7;
    const actual1 = getSecondItem([9, 7, 1]);

    const expected2 = 'hello';
    const actual2 = getSecondItem([true, 'hello', 88]);

    expect.equal(actual, expected, 'this function should return the second item in the array passed which is the string "cat" at index 1');

    expect.equal(actual1, expected1, 'this function should return the second item in the array passed which is the number 7 at index 1');

    expect.equal(actual2, expected2, 'this function should return the second item in the array passed which is the string "hello" at index 1');
});