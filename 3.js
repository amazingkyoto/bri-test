/*
string s: a string representation of an integer
int k: the maximum number of changes allowed
*/

let globalArr = [];

const firstIterationFunc = (s, k, i = 0, j = s.length - 1) => {
    if (i >= j) return k; // Base case: if pointers have crossed or met
    if (globalArr[i] !== globalArr[j]) {
        if (k < 1) return '-1'; // Not enough operations left
        const currMax = globalArr[i] > globalArr[j] ? globalArr[i] : globalArr[j];
        globalArr[globalArr[i] === currMax ? j : i] = currMax;
        k--;
    }
    return firstIterationFunc(s, k, i + 1, j - 1); // Recur with updated pointers
}

const secondIterationFunc = (s, k, i = 0, j = s.length - 1) => {
    if (i > j || k <= 0) return; // Base case: if pointers have crossed or no operations left
    if (globalArr[i] !== '9') {
        if (s[i] !== s[j]) {
            globalArr[i] = '9';
            globalArr[j] = '9';
            k--;
        } else if (i === j) {
            globalArr[i] = '9';
        } else if (k > 1) {
            globalArr[i] = '9';
            globalArr[j] = '9';
            k -= 2;
        }
    }
    return secondIterationFunc(s, k, i + 1, j - 1); // Recur with updated pointers
}

// Wrapper function to initialize and call the iterations
const makeLargestPalindromeFunc = (s, k) => {
    globalArr = s.split('');
    let remainingK = firstIterationFunc(s, k);
    if (remainingK !== '-1') {
        secondIterationFunc(s, remainingK);
        return globalArr.join('');
    } else {
        return '-1';
    }
}

// TEST CASES START
const testString1 = "3943";
const testK1 = 1;
console.log('Test #1 With: ', testString1, testK1, makeLargestPalindromeFunc(testString1, testK1));

const testString2 = "2345432";
const testK2 = 2;
console.log('Test #2 With: ', testString2, testK2, makeLargestPalindromeFunc(testString2, testK2));

const testString3 = "1312";
const testK3 = 1;
console.log('Test #3 With: ', testString3, testK3, makeLargestPalindromeFunc(testString3, testK3));
// TEST CASES END