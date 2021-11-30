import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
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