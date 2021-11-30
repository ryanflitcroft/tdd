import { 
    addExclamationPoints,
    multiplyBySeven,
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

    expect.equal(actual, expected, 'the return value of this function should be the product of an argument num and 7, which equals 35 in this test');
    expect.equal(typeof actual, 'number', 'the return value of this function should be the typeof number');
    expect.equal(actual, 7 * 5, 'the return value of this function should equal to 7 * 5');
});

