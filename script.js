let calculator = document.getElementById('calc');
let display = document.querySelector('.display')

function action(event) {
    let trg = event.target;

    let dia = document.querySelectorAll('.dia');
    let fixdia = Object.values(dia).map((elem) => elem.innerHTML);
    let strlength = display.innerHTML.length;
    
    for (elem of fixdia) { 
        if (display.innerHTML.charAt(strlength - 1) == elem) return;
    };
    
    if (!trg.classList.contains('dia')) return;

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