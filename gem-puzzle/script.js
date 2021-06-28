const field = document.querySelector('.field'),
    move = document.querySelector('.move'),
    time = document.querySelector('.time'),
    start = document.querySelector('.start'),
    congratulation = document.querySelector('.congratulation'),
    popupButton = document.querySelector('.button'),
    threeField = document.querySelector('.three-field'),
    fourField = document.querySelector('.four-field'),
    fiveField = document.querySelector('.five-field'),
    newGame = document.querySelector('.newgame');

let cellSize = 100,
    empty = {
        value: 0,
        top: 0,
        left: 0

    },

    cells = [];


cells.push(empty);
let numberOfSteps = 0;
let quantityMoves = 1;

/*** MOVE PUZZLE ***/

function movePuzzle(index) {
    const cell = cells[index],
        leftDiff = Math.abs(empty.left - cell.left),
        topDiff = Math.abs(empty.top - cell.top);

    if (leftDiff + topDiff > 1) {
        return;
    }

    cell.element.style.left = `${empty.left  * cellSize}px`;
    cell.element.style.top = `${empty.top  * cellSize}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;

    empty.left = cell.left;
    empty.top = cell.top;

    cell.left = emptyLeft;
    cell.top = emptyTop;

    const isFinished = cells.every(cell => {
        return cell.value === cell.top * quantityField + cell.left;
    });


    if (isFinished) {
        addEventListener('click', () => {
            document.querySelector('.bg-popup').style.display = 'flex';
            clearInterval(timer);
            congratulation.innerHTML = `Ура! Вы решили головоломку за ${min} минут ${sec} секунд и ${quantityMoves} ходов`;
        });
    }

    move.innerHTML = `moves: ${quantityMoves++}`;
    document.getElementById('sound').play();
}

/*** GENERATE PUZZLE ***/

let quantityField = 4,
    quantityCell = 15;

function generatePuzzle() {

    const numbers = [...Array(quantityCell).keys()]
        // ЗАКОММЕНТИРУЙ СТРОКУ НИЖЕ ДЛЯ ПРОВЕРКИ)
        .sort(() => Math.random() - 0.5);

    for (let i = 1; i <= quantityCell; i++) {

        const cell = document.createElement('div'),
            value = numbers[i - 1] + 1;
        let background;
        if (quantityCell === 8) {
            background = `./image/9/${value+1}.jpg`
        }
        if (quantityCell === 15) {
            background = `./image/16/${value+1}.jpg`
        }
        if (quantityCell === 24) {
            background = `./image/25/${value+1}.jpg`
        }

        cell.style.backgroundImage = `url(${background})`;


        cell.className = 'cell';
        cell.setAttribute('draggable', true);
        // cell.innerHTML = value

        const left = i % quantityField;
        const top = (i - left) / quantityField;

        cells.push({
            background: background,
            value: value,
            left: left,
            top: top,
            element: cell
        });

        cell.style.left = `${left * cellSize}px`;
        cell.style.top = `${top * cellSize}px`;

        field.append(cell);

        cell.addEventListener('click', () => {
            movePuzzle(i);
        })
    }
}


/*** NEW GAME BUTTON ***/

newGame.addEventListener('click', () => {
    move.innerHTML = `moves: 0`;
    quantityMoves = 1;

    field.innerHTML = ""

    cells = [];

    empty = {
        value: 0,
        top: 0,
        left: 0

    };

    cells.push(empty);
    generatePuzzle();
    newGameTime();
})

function newGameTime() {
    clearInterval(tick);
    hour = 0;
    min = 0;
    sec = 0;
    time.innerHTML = `00:00:00`;
}


/*** FIELD BUTTONS  ***/

threeField.addEventListener('click', () => {
    quantityField = 3;
    quantityCell = 8;

    move.innerHTML = `moves: 0`;
    quantityMoves = 1;

    field.innerHTML = ""

    cells = [];

    empty = {
        value: 0,
        top: 0,
        left: 0

    };

    field.style.width = '300px';
    field.style.height = '300px';

    cells.push(empty);
    generatePuzzle();
    newGameTime();
})

fourField.addEventListener('click', () => {
    quantityField = 4;
    quantityCell = 15;

    move.innerHTML = `moves: 0`;
    quantityMoves = 1;

    field.innerHTML = ""

    cells = [];

    empty = {
        value: 0,
        top: 0,
        left: 0

    };

    field.style.width = '400px';
    field.style.height = '400px';

    cells.push(empty);
    generatePuzzle();
    newGameTime();
})

fiveField.addEventListener('click', () => {
    quantityField = 5;
    quantityCell = 24;

    move.innerHTML = `moves: 0`;
    quantityMoves = 0;

    field.innerHTML = ""

    cells = [];

    empty = {
        value: 0,
        top: 0,
        left: 0

    };

    field.style.width = '500px';
    field.style.height = '500px';

    cells.push(empty);
    generatePuzzle();
    newGameTime();
})

/*** GAME TIME ***/

let min = 0,
    hour = 0;

function init() {
    sec = 0;
    timer = setInterval(tick, 1000);
}

function tick() {
    sec++;
    if (sec >= 60) {
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }
    if (sec < 10) {
        if (min < 10) {
            if (hour < 10) {
                document.querySelector('.time').innerHTML = `0${hour}:0${min}:0${sec}`;
            } else {
                document.querySelector('.time').innerHTML = `0${hour}:0${min}:0${sec}`;
            }
        } else {
            if (hour < 10) {
                document.querySelector('.time').innerHTML = `0${hour}:${min}:0${sec}`;
            } else {
                document.querySelector('.time').innerHTML = `${hour}:${min}:0${sec}`;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                document.querySelector('.time').innerHTML = `0${hour}:0${min}:${sec}`;
            } else {
                document.querySelector('.time').innerHTML = `${hour}:0${min}:${sec}`;
            }
        } else {
            if (hour < 10) {
                document.querySelector('.time').innerHTML = `0${hour}:${min}:${sec}`;
            } else {
                document.querySelector('.time').innerHTML = `${hour}:${min}:${sec}`;
            }
        }
    }
}

/*** START BUTTON ***/

init()
generatePuzzle()