import { 
    addExclamationPoints,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should take in a parameter of a string and return a concat of that string with 3 exclamation points.', (expect) => {
    const expected = 'hello!!!';

    const actual = addExclamationPoints('hello');

    expect.equal(actual, expected, 'this function should return the argument of "hello" concat with the string "!!!" for a value of "hello!!!"');
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

