const isBracketBalancedFunc = (input) => {
    input = input.replaceAll(" ", "");
    let stack = [];
    const brackets = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    let result = '';

    for (let i = 0; i < input.length; i++) {
        const bracketPiece = input[i];
        
        if (brackets[bracketPiece]) {
            stack.push(bracketPiece);
        } else {
            if (stack.length === 0 || (brackets[stack.pop()] !== bracketPiece)) {
                return 'NO';
            }
        }
    }

    result = stack.length > 0 ? 'NO' : 'YES';
    return result;
}

// TEST CASES START
const testInput1 = '{[ () ] }';
console.log('Test #1 With: ', testInput1, isBracketBalancedFunc(testInput1));

const testInput2 = ' {[ ( ]) }';
console.log('Test #1 With: ', testInput2, isBracketBalancedFunc(testInput2));

const testInput3 = '{( ([] )[] ) [ ]}';
console.log('Test #1 With: ', testInput3, isBracketBalancedFunc(testInput3));
// TEST CASES END


/* PENJELASAN DETAIL KOMPLEKSITAS SOAL NO 2
    Untuk mengurangi kompleksitas kode, maka telah dibuat:
    - Kode telah dipersingkat menggunakan arrow function
    - Kode telah dipersingkat dengan function biasa:
        if (stack.length === 0) {
            return 'NO';
        }
        const top = stack[stack.length - 1]; // Dapatkan elemen terakhir
        stack.splice(stack.length - 1, 1); // Hapus elemen terakhir
        if (brackets[top] !== bracketPiece) {
            return 'NO';
        }
        
        menjadi:
        if (stack.length === 0 || (brackets[stack.pop()] !== bracketPiece)) {
            return 'NO';
        }
*/