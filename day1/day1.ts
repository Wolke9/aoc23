import * as fs from 'fs';
const loadFile = (): string => {
    return fs.readFileSync("./day1/code.txt", 'utf-8');
};
const re: RegExp = /[a-zA-Z]/g;
const reNumbers: RegExp = /[0-9]/g;

export const replaceAllNonNumerables = (line: string): string => line.replace(re, "");

export const returnFirstAndLastDigit = (lines: string[]) => lines.map((l: string) => {
    return l[0] + "" + l.slice(-1);
});

export const replaceTextWithNumber = (line: string): string => {
    const normalCases = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    const specialCases = {

        'oneight': 18,
        'twone': 21,
        'threeight': 38,
        'fiveight': 58,
        'sevenine': 79,
        'eightwo': 82,
        'eighthree': 83,
        'nineight': 98
    }
    // 
    const allSpecialCases = Object.keys(specialCases).filter(sc => line.includes(sc));
    if (allSpecialCases.length > 0) {
        for (var scKey of allSpecialCases) {
            line = line.replaceAll(scKey, specialCases[scKey]);
        }
    }
    const allNormalCases = Object.keys(normalCases).filter(sn => line.includes(sn))
    if (allNormalCases.length > 0) {
        for (var scKey of allNormalCases) {
            line = line.replaceAll(scKey, normalCases[scKey]);
        }
    }
    return line;
}

const getAllSpecialCases = () => {
    const a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const specialCases = [];
    for (var n of a) {
        const lastChar = n.slice(-1)
        const lastIsFirstChar = a.filter(s => s.charAt(0) === lastChar);
        // console.log(`${n} : ${lastIsFirstChar}`);
        if (lastIsFirstChar.length > 0) {
           const specialCaseArr  =  lastIsFirstChar.map(lf => n.slice(0, -1) + lf)
           specialCases.push(...specialCaseArr)
        }
    }
    return specialCases;
}
const main = async () => {
    const f: string = loadFile();
    const lines: string[] = f.split("\n");

    // first part
    const linesNumbersOnly: string[] =  lines.map(l => replaceAllNonNumerables(l));
    const firstAndLastDigit_p1: string[] = returnFirstAndLastDigit(linesNumbersOnly);
    const code_p1 = firstAndLastDigit_p1.map((no: string) => Number(no));
    const sum_p1 = code_p1.reduce((acc, cv) => acc + cv, 0)
    console.log("Solution To First Part", sum_p1);

    //second part
    const wordsToDigits: string[] = lines.map((l: string) => replaceTextWithNumber(l));
    const onlyDigits = wordsToDigits.map(w => replaceAllNonNumerables(w)); 
    const firstAndLastDigit_p2: string[] = returnFirstAndLastDigit(onlyDigits);
    const code_p2 = firstAndLastDigit_p2.map((no: string) => Number(no));
    const sum_p2 = code_p2.reduce((acc, cv) => acc + cv, 0)
    console.log("Solution To Second Part", sum_p2);
};

main();


