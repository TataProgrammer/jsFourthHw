var quantity = +prompt('введите количество примеров.');
var min = 1;
var max = 100;
var minsym = 1;
var maxsym = 4;

function numRand(min,max) {
    return Math.floor(Math.random()*(max + 1 - min) + min);
}
function symbolRand(minsym,maxsym) {
    return Math.floor(Math.random()*(maxsym + 1 - minsym) + minsym);
}

for (let i = 0; i < quantity; i++) {
    let num1 = numRand(min,max);
    let num2 = numRand(min,max);
    let symbolR = symbolRand(minsym,maxsym);
    let answer = 0;


if (symbolR == 1) {
    symbol = ' + '
    answer = num1 + num2;
} else if(symbolR == 2){
    symbol = ' - '
    answer = num1 - num2;
}  else if(symbolR == 3){
    symbol = ' * '
    answer = num1 * num2;
} else if(symbolR == 4){
    symbol = ' / '
    answer = num1 / num2;
} else{
    alert('Ошибка')
}

let prim = +prompt(num1 + symbol + num2 + '=');


if (prim == answer) {
  console.log(num1 + symbol + num2 + ' = ' + answer + ' ваш ответ ' + prim + ' Правильно '); 
} else if(prim != answer){
   console.log(num1 + symbol + num2 + ' = ' + answer + ' ваш ответ ' + prim + ' Неправильно ');
} else{
   console.log('Ошибка');
}

}



