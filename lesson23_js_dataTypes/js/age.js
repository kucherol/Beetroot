const age = prompt("What is your age");
const isAge = Number(age);

if (isAge >= 0 && isAge <= 2) {
    alert("You are a child");
} else if (isAge >= 12 && isAge < 18) {
    alert("You are a teenager");
} else if (isAge >= 18 && isAge < 60) {
    alert("You are a adult");
} else if (isAge >= 60) {
    alert("You are a old");
} else {
    alert ("You are a kid")
}