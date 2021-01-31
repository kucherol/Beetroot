let s = prompt("Enter 10 numbers ex.(10,15,12,18,...)");

for (let i=0; i<s.length; i++) {
    if (s[i]<0) {
        i=i+1;
        console.log (i, "items with minus value");
    } else if (s[i]>0) {
        i=i+1;
        console.log (i , "items with plus value");
    } else if (s[i]=0) {
        i=i+1;
        console.log (i , "items with zero value");
    }
}
console.log(s);