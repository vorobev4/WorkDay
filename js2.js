let btn = document.getElementById('btn');
let workDay = document.getElementById('worksDay').value;
let weekendDay = document.getElementById('weekendsDay').value;

document.getElementById('btn').onclick = function() {
    let date = new Date(document.getElementById('date-form').value);
    let maxDay = document.getElementById('max-days').value;
    let workDay = document.getElementById('worksDay').value;
    let weekendDay = document.getElementById('weekendsDay').value;

    if (isNaN(date)) {
        alert('Введите дату');
        return;
    }
    document.getElementById('data-block').innerHTML = '';

    zer(date, maxDay, workDay, weekendDay);
    
    return false;
}
function zer(date, maxDay, workDay, weekendDay) {
    let fullGetDate;
    let number = +workDay + +weekendDay;
    let numReturn = 1;
    
    for (let x = 0; x < maxDay; x++) {
        let getTegDate = date.getDate();
        let getTegMonth = date.getMonth();
        let getTegYear = date.getFullYear();

        fullGetDate = (
            getTegDate + "." +
            zeroMonth(getTegMonth) + "." +
            getTegYear
        );

        dayPlus(date);

        if (numReturn <= +workDay) newTeg(fullGetDate);
        (numReturn == number) ? numReturn = 1 : numReturn++;
    }
    $('p').hide();
    $('p').slideToggle(1000);
}
function newTeg(fullGetDate) {
    let newTegP = document.createElement('p');
    newTegP.innerHTML = fullGetDate;
    document.getElementById('data-block').appendChild(newTegP);
}
function dayPlus(date) {
    date.setDate(date.getDate() + 1);
}
function zeroMonth(month) {
    month = +month + 1;
    if (month < 10) {
        month = '0' + month;
    }
    return month;
}

//go top
let $btnTop = $('#btn-up');
$(window).on('scroll', function() {
    if ($(window).scrollTop() >= 80) {
        $btnTop.fadeIn();
    } else {
        $btnTop.fadeOut();
    }
});
$btnTop.on('click', function() {
    $('html, body').animate({scrollTop:0}, 1000);
});