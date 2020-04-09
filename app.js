



document.addEventListener('DOMContentLoaded', function () {

    const container = document.querySelector('.grid-container');

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

            grid.classList.add('color');
        })
    })

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {

        button.addEventListener('click', function () {


            if (button.classList.contains('clear')) {

                const gridContainer = document.querySelectorAll('.box');

                gridContainer.forEach(grid => {

                    grid.classList.remove('color');
                })

            } else if(button.classList.contains('erase')) {

                const gridContainer = document.querySelectorAll('.box');

                gridContainer.forEach( grid => {

                    grid.addEventListener('mouseover', function() {

                        grid.classList.toggle('color');
                    })
                })
            }




        })
    })

})

