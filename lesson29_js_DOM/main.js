/* 1 
const playList = [
    { author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN" },
    { author: "QUEEN",song:"BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD",song:"FREE BIRD" },
    { author: "DEEP PURPLE",song:"SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX",song:"ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC",song:"BACK IN BLACK" },
    { author: "QUEEN",song:"WE WILL ROCK YOU" },
    { author: "METALLICA",song:"ENTER SANDMAN" }
    ];

let list = document.querySelector('ol');
playList.forEach(function(el) {
    list.insertAdjacentHTML('beforeend', `<li> Author: ${el.author} and the song ${el.song}</li>`);
});

*/

/* 2
const modal = document.querySelector('.modal');

function showModal() {
  modal.style.display = 'block';
}

function closeModal(event) {
  event.stopPropagation()
  modal.style.display = 'none';
}

const openBtn = document.querySelector('.show');
const closeBtn = document.querySelector('.hide');

openBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', closeModal)
*/

/* 3
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const change = document.querySelector('.change');

function light() {
    if ( red.style.backgroundColor == "red" && yellow.style.backgroundColor == "white" && green.style.backgroundColor == "white") {
        red.style.backgroundColor = "white";
        yellow.style.backgroundColor = "yellow";
        green.style.backgroundColor = "white";
    } else if ( red.style.backgroundColor == 'white' && yellow.style.backgroundColor == 'yellow' && green.style.backgroundColor == 'white') {
        red.style.backgroundColor = 'white';
        yellow.style.backgroundColor = 'white';
        green.style.backgroundColor = 'green';
    } else if ( red.style.backgroundColor == 'white' && yellow.style.backgroundColor == 'white' && green.style.backgroundColor == 'green'){
        red.style.backgroundColor = 'red';
        yellow.style.backgroundColor = 'white';
        green.style.backgroundColor = 'white';
    }
    return;
}
change.addEventListener('click', light);
*/