/* 1 

function numbers(a, b) {
    if (a > b) {
        console.log(1);
    } else if (a < b) {
        console.log(-1);
    } else if (a === b) {
        console.log(0);
    }
    return;
}
numbers(15, 16);
*/

/* 2 

function factorial(n){
    if (n == 1) {
        return 1;
    } else {
        return n*factorial(n-1);	
    }	
}
let Num = +prompt('Enter the number');
alert(factorial(Num)); 
*/

/* 3 

function threeNumbers(a, b, c) {
    a = String(a);
    return alert(a + b + c);
}

threeNumbers(4,8,3); 
*/

/* 4 

function square(a, b) {
    if (a === undefined) {
        return alert(b * b);
    } else if (b === undefined) {
        return alert(a * a);
    } else {
        return alert(a*b);
    }
}
square(10, 5);
*/

/* 5 */

function perfectNum(n) {
    let m;
    let sum = 0;
    for (let i = 1; i < n - 1; i++) {
        m = n % i;
        if (m === 0) {
            sum += i;
        }
    }
    if (n === sum) {
        console.log('Perfect number');
        return;
        } else {
        console.log('Not perfect number');
        return;
    }
}

/*perfectNum(6);*/

/* 6 */

function diapasone(a, b) {
    for (let i = a; i <= b; i++) {
        if (perfectNum(i) === 'Perfect number') {
        console.log(i ,perfectNum(i));
        }
    }
return;
}

diapasone(2, 10);