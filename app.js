


/*
document.addEventListener('DOMContentLoaded', function () {

    const container = document.querySelector('.grid-container');

    // const value = prompt('Please enter number for resizing grid');
    let rows = 16;
    let columns = 16;

    let total = rows * columns;
    console.log(total);

    for (var i = 1; i <= total; i++) {

        const div = document.createElement('div');
        div.classList.add('box');

        container.appendChild(div);

    }

    const gridContainer = document.querySelectorAll('.box');

    gridContainer.forEach(grid => {

        grid.addEventListener('mouseover', function () {

            grid.classList.add('blackClr');
        })
    })

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {

        button.addEventListener('click', function () {


            if (button.classList.contains('clear')) {

                const gridContainer = document.querySelectorAll('.box');

                gridContainer.forEach(grid => {

                    grid.style.backgroundColor = 'white';
                })

            } else if (button.classList.contains('erase')) {

                const gridContainer = document.querySelectorAll('.box');

                gridContainer.forEach(grid => {

                    grid.addEventListener('mouseover', function () {

                        grid.style.backgroundColor = 'white';

                    })
                })

            }
        })
    })


    const colorButtons = document.querySelectorAll('.btnClr');

    colorButtons.forEach(button => {

        button.addEventListener('click', function () {

            if (button.classList.contains('black')) {

                const gridContainer = document.querySelectorAll('.box');

                gridContainer.forEach(grid => {

                    grid.addEventListener('mouseover', function () {

                        grid.style.backgroundColor = 'black';
                    })
                })
            } else if (button.classList.contains('red')) {

                const gridContainer = document.querySelectorAll('.box');

                gridContainer.forEach(grid => {

                    grid.addEventListener('mouseover', function () {

                        grid.style.backgroundColor = 'red';
                    })
                })
            } else if (button.classList.contains('green')) {

                const gridContainer = document.querySelectorAll('.box');

                gridContainer.forEach(grid => {

                    grid.addEventListener('mouseover', function () {

                        grid.style.backgroundColor = 'green';
                    })
                })
            } else if (button.classList.contains('blue')) {

                const gridContainer = document.querySelectorAll('.box');

                gridContainer.forEach(grid => {

                    grid.addEventListener('mouseover', function () {

                        grid.style.backgroundColor = 'blue';
                    })
                })
            } else if (button.classList.contains('yellow')) {

                const gridContainer = document.querySelectorAll('.box');

                gridContainer.forEach(grid => {

                    grid.addEventListener('mouseover', function () {

                        grid.style.backgroundColor = 'yellow';
                    })
                })
            } else if (button.classList.contains('random')) {

                const gridContainer = document.querySelectorAll('.box');

                const array = ['black', 'red', 'green', 'blue', 'yellow'];

                let random = Math.floor(Math.random() * array.length);
                console.log(random);

                gridContainer.forEach(grid => {

                    grid.addEventListener('mouseover', function () {



                        grid.style.backgroundColor = array[random];
                    })
                })
            }

        })
    })
})*/










///////////////////////////////////////////////////////////////////////

let value = 16

const container = document.querySelector('.grid-container');



function resizeGrid(value) {



    // const value = prompt('Please enter number for resizing grid');
    let rows = value;
    let columns = value;
    console.log('rows: ' + rows);
    console.log('columns: ' + columns);
    let total = rows * columns;
    ;

    for (var i = 1; i <= total; i++) {

        const div = document.createElement('div');
        div.classList.add('box');

        container.appendChild(div);

    }


    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

    mouseOver();
}

// function reset

function resetGrid() {

    container.innerHTML = '';
}

function mouseOver() {

    const gridContainer = document.querySelectorAll('.box');

gridContainer.forEach(grid => {

    grid.addEventListener('mouseover', function () {

        grid.classList.add('blackClr');
    })
})

}



const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

    button.addEventListener('click', function () {


        if (button.classList.contains('clear')) {

            const gridContainer = document.querySelectorAll('.box');

            gridContainer.forEach(grid => {

                grid.style.backgroundColor = 'white';
            })

        } else if (button.classList.contains('erase')) {

            const gridContainer = document.querySelectorAll('.box');

            gridContainer.forEach(grid => {

                grid.addEventListener('mouseover', function () {

                    grid.style.backgroundColor = 'white';

                })
            })

        } else if (button.classList.contains('resize')) {


            const value = prompt('Please enter number for resizing the grid');

            resetGrid();
            resizeGrid(value);



        }
    })
})


const colorButtons = document.querySelectorAll('.btnClr');

colorButtons.forEach(button => {

    button.addEventListener('click', function () {

        if (button.classList.contains('black')) {

            const gridContainer = document.querySelectorAll('.box');

            gridContainer.forEach(grid => {

                grid.addEventListener('mouseover', function () {

                    grid.style.backgroundColor = 'black';
                })
            })
        } else if (button.classList.contains('red')) {

            const gridContainer = document.querySelectorAll('.box');

            gridContainer.forEach(grid => {

                grid.addEventListener('mouseover', function () {

                    grid.style.backgroundColor = 'red';
                })
            })
        } else if (button.classList.contains('green')) {

            const gridContainer = document.querySelectorAll('.box');

            gridContainer.forEach(grid => {

                grid.addEventListener('mouseover', function () {

                    grid.style.backgroundColor = 'green';
                })
            })
        } else if (button.classList.contains('blue')) {

            const gridContainer = document.querySelectorAll('.box');

            gridContainer.forEach(grid => {

                grid.addEventListener('mouseover', function () {

                    grid.style.backgroundColor = 'blue';
                })
            })
        } else if (button.classList.contains('yellow')) {

            const gridContainer = document.querySelectorAll('.box');

            gridContainer.forEach(grid => {

                grid.addEventListener('mouseover', function () {

                    grid.style.backgroundColor = 'yellow';
                })
            })
        } else if (button.classList.contains('random')) {

            const gridContainer = document.querySelectorAll('.box');

            const array = ['black', 'red', 'green', 'blue', 'yellow'];

            let random = Math.floor(Math.random() * array.length);
            console.log(random);

            gridContainer.forEach(grid => {

                grid.addEventListener('mouseover', function () {



                    grid.style.backgroundColor = array[random];
                })
            })
        }

    })
})

resizeGrid(value)