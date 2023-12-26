let calculator = document.getElementById('calc');
let display = document.querySelector('.display')

function action(event) {
    let trg = event.target;

    if (trg.className != 'dia') return;

    display.innerHTML += trg.innerHTML;
}

function sum(event) {
    
}

function num(event) {
    let target = event.target;

    if (target.className != 'num') return;
    
    if (display.innerHTML == "0") {
        display.innerHTML = target.innerHTML;
        return;
    }

    display.innerHTML += target.innerHTML;
}


calculator.addEventListener('click', num);
calculator.addEventListener('click', action);
