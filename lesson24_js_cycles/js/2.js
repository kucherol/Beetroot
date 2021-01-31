const f = prompt("first number");
const s = prompt("second number");

if (f>s) {
    for(let i=0;i<f;i++){
        if(f%i==0 && s%i==0){
        console.log(i);
        }
    }
} else if (f<=s) {
    for(let i=0;i<s;i++){
        if(f%i==0 && s%i==0){
        console.log(i);
        }
    }
}