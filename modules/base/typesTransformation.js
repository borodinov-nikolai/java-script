



//Строковое
let value = true;
value = String(value);
console.log(typeof value)


//Численное
console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
console.log( Number(true) );        // 1
console.log( Number(false) );   

//Логическое
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("Привет!") ); // true
console.log( Boolean("") ); // false









