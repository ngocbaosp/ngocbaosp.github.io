console.log(1 + 0);                  // 1
console.log(1 + 1) ;                 // 2
console.log(1 + (-1));               // 0
console.log(1 + '')  ;               // '1'
console.log(1 + undefined);          // NaN
console.log(1 + null);               // 1
console.log(1 + false);              // 1
console.log(1 + true);               // 2
console.log(1 + NaN);                // NaN
console.log(1 + Infinity);           // Infinity
console.log(true + true);            // 2
console.log(true + false);           // 1
console.log(true + '!');             // 'true!'
console.log(Infinity + (-1) );       // Infinity
console.log(Infinity + Infinity);    // Infinity
console.log('' + '' );               // ''
console.log('1' + "1" );             // '11'
console.log('1' + 0     );           // '10'
console.log('1' + ''      );         // '1'
console.log('1' + undefined );       // '1undefined'
console.log('1' + null        );     // '1null'
console.log('1' + NaN           );   // '1NaN'
console.log('1' + Infinity        ); // '1Infinity'
console.log('1' + true     );        // '1true'
console.log('$' + 3 + 4      );      // '$34'
console.log('$' + (3 + 4));