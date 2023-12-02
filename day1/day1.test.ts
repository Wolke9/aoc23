import { describe, expect, test } from '@jest/globals';
import { returnFirstAndLastDigit } from './day1';
const checkArray = (a, b) => {
    a.map((e, i) => expect(b[i]).toBe(a[i]));
}
describe("first and last digit of Array of numbers in strings", () => {

    test('array of random numbers', () => {
        const test_arr: string[] = ['776', '8753', '951'];
        const result_arr: string[] = ["76", "83", "91"];
        const flDigitArray = returnFirstAndLastDigit(test_arr);
        checkArray(result_arr, flDigitArray)
    });

    test('array of random numbers with one single digit and double digit', () => {
        const test_arr: string[] = ['7', '88', '951'];
        const result_arr: string[] = ["77", "88", "91"];
        const flDigitArray = returnFirstAndLastDigit(test_arr);
        checkArray(result_arr, flDigitArray)
    });
});

describe("first and last digit of Array of numbers in strings", () => {

    test('array of random numbers', () => {
        const test_arr: string[] = ['776', '8753', '951'];
        const result_arr: string[] = ["76", "83", "91"];
        const flDigitArray = returnFirstAndLastDigit(test_arr);
        checkArray(result_arr, flDigitArray)
    });

    test('array of random numbers with one single digit and double digit', () => {
        const test_arr: string[] = ['7', '88', '951'];
        const result_arr: string[] = ["77", "88", "91"];
        const flDigitArray = returnFirstAndLastDigit(test_arr);
        checkArray(result_arr, flDigitArray)
    });
});