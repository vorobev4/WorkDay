//выбор даты
let arr = [
    "Январь", "Февраль", "Март", "Апрель",
    "Май", "Июнь", "Июль", "Август",
    "Сентябрь", "Октябрь", "Ноябрь", "Дикабрь"
];
let thisData = new Date();
let day = writeDayFun();
let month = funMonth(writeMonthFun()); 
let year = thisData.getFullYear();

let getThisData = day + '.' + month + '.' + year;

console.log(getThisData);
console.log(document.getElementById('date-form').value);
document.getElementById('date-form').value = (
    thisData.getFullYear() + '-'
    + thisData.getMonth() + '-'
    + thisData.getDate());

let qwe = new Date(document.getElementById('date-form').value);
console.log(qwe);
console.log(qwe.getDate());

function funMonth(month) {
    (month < 10) ? month = ('0' + month) : month;
    return month;
}

function writeDayFun() {
    // let writeDay = prompt(
    //     'Введите число первого рабочего дня',
    //     thisData.getDate()
    //     );
    // if (writeDay == null || writeDay == '') writeDay = thisData.getDate();
    // console.log('writeDay = ' + writeDay);
    // return writeDay;
    return thisData.getDate();
}

function writeMonthFun() {
    // let writeMonth = confirm('Выбрать месяц ' + [arr[thisData.getMonth()]]);
    // if (!writeMonth) {
    //     writeMonth = prompt(
    //         'Введите номер нужного месяца',
    //         thisData.getMonth() + 1
    //     );
    //     if (writeMonth == undefined || writeMonth == '') {
    //         writeMonth = thisData.getMonth() + 1;
    //         alert(arr[writeMonth - 1]);
    //     } else {
    //         alert(arr[writeMonth - 1]);
    //     }
    // } else  {
    //     writeMonth = thisData.getMonth() + 1;
    // }
    // console.log('writeMonth = ' + writeMonth);
    // return writeMonth;
    return thisData.getMonth() + 1;
}


//добавление тега
let pTeg = '<p>' + getThisData + '</p>';
let targetDiv = document.getElementById('data-block');
targetDiv.innerHTML = pTeg;

let newTegP = document.createElement('p');
newTegP.innerHTML = getThisData;
document.getElementById('data-block').appendChild(newTegP);