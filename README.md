# README

## Penjelasan Detail Kompleksitas Soal No 2

Untuk mengurangi kompleksitas kode, beberapa perbaikan telah dilakukan:

### 1. Penggunaan Arrow Function
Kode telah dipersingkat dengan menggunakan arrow function. Hal ini membuat kode lebih ringkas dan mudah dibaca.

### 2. Penyederhanaan dengan Function Biasa
Kode telah dipersingkat menggunakan function biasa. Berikut adalah contoh penyederhanaan yang dilakukan:
```javascript
// Sebelumnya:
    if (stack.length === 0) {
        return 'NO';
    }
    const top = stack[stack.length - 1]; // Dapatkan elemen terakhir
    stack.splice(stack.length - 1, 1); // Hapus elemen terakhir
    if (brackets[top] !== bracketPiece) {
        return 'NO';
    }
    
// menjadi:
    if (stack.length === 0 || (brackets[stack.pop()] !== bracketPiece)) {
        return 'NO';
    }
