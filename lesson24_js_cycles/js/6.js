do {
const f = +prompt("first number");
const s = +prompt("second number");
const op = prompt("operand");
let x = 0;

if (op == "-") {
    x=f-s;
    confirm(`result  ${x}`);
} else if (op == "+") {
    x=f+s;
    confirm(`result  ${x}`);
} else if (op == "/") {
    x=f/s;
    confirm(`result  ${x}`);
} else if (op == "*") {
    x=f*s;
    confirm(`result  ${x}`);
} 
} while (confirm(`result  ${x}`))