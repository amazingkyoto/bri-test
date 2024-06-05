
const stringWeightFunc = (string) => {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let extra = 0;
    let stringWeight = [];
    
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        const letterAfter = string[i + 1];
        extra += parseInt(alphabet.indexOf(letter) + 1);
        stringWeight.push(extra);
        
        if ((letter != letterAfter)) {
            extra = 0;
        }
    }

    return stringWeight;
}

const queriesStatusFunc = (string, queries) => {
    const stringWeight = stringWeightFunc(string); // output e.g: [1,2,4,3,6,9,4]
    let result = [];

    for (let i = 0; i < queries.length; i++) {
        result[i] = (stringWeight.includes(queries[i])) ? 'Yes' : 'No'; // to determine
    }

    return result;
}

// TEST CASES START
const test1String = 'abbcccd';
const test1Queries = [1, 3, 9, 8];
console.log('Test #1 With: ', test1String, test1Queries, queriesStatusFunc(test1String, test1Queries));

const test2String = 'bbccccssf';
const test2Queries = [3, 4, 5, 6, 9];
console.log('Test #2 With: ', test2String, test2Queries, queriesStatusFunc(test2String, test2Queries));

const test3String = 'ffzzkkxxxxxllla';
const test3Queries = [10, 12, 14, 22];
console.log('Test #3 With: ', test3String, test3Queries, queriesStatusFunc(test3String, test3Queries));
// TEST CASES END