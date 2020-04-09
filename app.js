



document.addEventListener('DOMContentLoaded', function() {

const container = document.querySelector('.grid-container');
const buttons = document.querySelectorAll('.box');


let rows = 16;
let columns= 16;

let total = rows * columns;
console.log(total);

for (var i = 1; i <= total; i++ ) {

    const div = document.createElement('div');
    div.classList.add('box');

    container.appendChild(div);
}

buttons.forEach( button => {

    console.log(button);

    /*
    button.addEventListener('onmouseenter', function() {

        console.log('hello');
    })
    */
})

})
