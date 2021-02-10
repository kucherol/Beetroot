/*  1  

class Square {
    constructor(radius) {
    this.radius = 18;
    }
    getRadius() {
        console.log(this.radius);
    }
    setRadius(rad) {
        this.radius = rad;
        console.log(this.radius);
    }
    getDiametr() {
        console.log(this.radius * 2);
    }
    getLength() {
        console.log(2 * 3.14 * this.radius);
    }
    getArea() {
        console.log(3.14 * (this.radius ** 2));
    }
}

const square = new Square();
square.getRadius();
square.setRadius(15);
square.getDiametr();
square.getLength();
square.getArea();
*/

/* 2 

class Marker {
    constructor(color,ink){
        this.color = "red";
        this.ink = 0;
    }
    print() {
        let text = prompt("enter the text");
        for (let i = 0; i < text.length; i++) {
            if (text[i] != " ") {
                this.ink = this.ink + 0.5;
            }
        }
        if (this.ink >= 100) {
            alert ("the ink is over");
        } else {
            document.write(`<p style="color:${this.color}">${text}</p>`);
            alert (`the ink level is ${100 - this.ink} %`)
        }
    }   
}

class reloadMarker extends Marker {
    reloadInk() {
        this.ink = 0;
        alert('the ink level is 100%');
    }
}

const marker = new Marker();
const ReloadMarker = new reloadMarker();
ReloadMarker.print();
ReloadMarker.reloadInk();
*/

/* 3 */

class Employee {
    constructor(name,age,role){
        this.name = name;
        this.age = age;
        this.role = role;
    }
    getHTML() {
        document.write(`<table><tr><td>${this.name}</td><td>${this.age}</td><td>${this.role}</td></tr></table>`);
    }
}
const employee1 = new Employee('John',28,'manager');
const employee2 = new Employee('Mike',34,'CEO');
const employee3 = new Employee('Kira',52,'HR');
const employee4 = new Employee('Ann',22,'casier');

employee1.getHTML();
employee2.getHTML();
employee3.getHTML();
employee4.getHTML();
