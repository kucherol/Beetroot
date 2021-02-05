/* 1 
    
    let car = {
    producer : 'Volksvagen',
    model : 'Golf',
    year : 2020,
    speed : 100
}

function readObject() {
    console.log(car);
}

function time(d) {
    let t = d / car.speed;
    let rest = 0;
    if (t >= 4) {
        rest = t / 4;
        console.log(t + rest);
        return;
    } else {
    console.log(t);
    }
}

readObject();
time(500);

*/

/* 3 

let hours = +prompt('enter hours');
let minutes = +prompt('enter minutes');
let seconds = +prompt('enter seconds');
let time = {
    hours : hours,
    minutes : minutes,
    seconds : seconds,
}

function timeRead(a = 01,b = 01,c = 01) {
    let s = 0;
    let p = 0;
    if (time.seconds > 60) {
        s = time.seconds / 60;
        s = Math.floor(s);
        time.seconds = time.seconds - (60 * s);
        time.minutes = time.minutes + s;
    }
    if (time.minutes > 60) {
        p = time.minutes / 60;
        p = Math.floor(p);
        time.minutes = time.minutes - (60 * p);
        time.hours = time.hours + p;
    }
    if (time.hours >= 24) {
        console.log('time error');
    }
    return console.log(time.hours + ':' + time.minutes + ':' + time.seconds);
}

function secondsAdded() {
    let a = +prompt("add seconds");
    time.seconds = time.seconds + a;
    return timeRead();
}

function minutesAdded() {
    let a = +prompt("add minutes");
    time.minutes = time.minutes + a;
    return timeRead();
}

function hoursAdded() {
    let a = +prompt("add hours");
    time.hours = time.hours + a;
    return timeRead();
}

timeRead(); 
minutesAdded();
secondsAdded();
hoursAdded();
*/

/* 1a 

let userName = prompt('enter name');
let age = +prompt('enter age');
let role = prompt('enter role (admin or user)');
let user = {
    userName : userName,
    age : age,
    role : role,
    length : function() {
        for (let key in user) {
            console.log(key);
        }
    },
    checkPermission : function() {
        if (this.role === 'admin') {
            alert('acces granted');
        } else {
            alert('acces denied');
        }
    }
}

let admin = user;
delete admin.role;


admin.checkPermission();
*/

/* 2a 

function createUser(name = 'John', age = 18, height = 170, weight = 65) {
    if (Number.isInteger(age) && Number.isInteger(height) && Number.isInteger(weight)) {
    let user = {
        name : name,
        age : age,
        height : height,
        weight : weight
    }
    console.log(user);
    } else {
        alert('wrong data type');
    }
}

createUser('oleh', 15, 20, 50);
*/