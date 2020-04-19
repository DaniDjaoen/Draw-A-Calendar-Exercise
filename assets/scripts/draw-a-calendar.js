const selector = document.querySelector("#month-selector");
const monthName = document.querySelector("#selected-month-name");
const drawDaysBox = document.querySelector("#draw-days");

selector.onchange = function () {
    const choice = selector.value;
    let daysToDraw;
    switch (choice) {
        case "february":
            daysToDraw = 28;
            break;
        case "april": case "june" : case "september": case "november":
            daysToDraw = 30;
            break;
        default:
            daysToDraw = 31;
            break;
    }
    createCalendar(daysToDraw, choice);
}

function createCalendar(daysToDraw, choice) {
    drawDaysBox.innerHTML= '';
    monthName.textContent = choice;
    for (let i = 1; i <= daysToDraw; i++) {
        const drawDay = document.createElement('li');
        drawDay.textContent = "Day " + i;
        drawDaysBox.appendChild(drawDay);
    }
}

const defaultChoice = selector.value;
const defaultDaysToDraw = 31;

createCalendar(defaultDaysToDraw, defaultChoice);