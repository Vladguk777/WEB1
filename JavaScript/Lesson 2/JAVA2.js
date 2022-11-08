let time = {
    secunds: 26,
    hours: 11,
    minutes : 35
}
function showtime(time1) {
    alert(`На данний момент час становить: ${time1.hours}:${time1.minutes}:${time1.secunds}`);
}
showtime(time);
function showtime1(time1) {
    alert(`Час на данний момент + 1 секунда: ${time1.hours}:${time1.minutes}:${time1.secunds + 1}`);
}
showtime1(time);
function showtime2(time1) {
    alert(`Час на данний момент - 1 секунда: ${time1.hours}:${time1.minutes}:${time1.secunds - 1}`);
}
showtime2(time);
function showtime3(time1) {
    let qwesh = prompt("Ви хочете додати чи відняти секунди(1-додати/2-відняти)?");
    if(qwesh == 1){
        let secunds1 = +prompt("Введіть на яку кількість секунд ви хочете змінити час:");
        let secunds3 = Math.round(secunds1 / 60);
        if(secunds1 < 34){
            alert(`Час на данний момент + ${secunds1}  секунд: ${time1.hours}:${time1.minutes}:${time1.secunds + secunds1}`);    
        }
        if(time.secunds + secunds1 == 60){
            alert(`Час на данний момент + ${secunds1}  секунд: ${time1.hours}:${time1.minutes + 1}:00`);
        }
        if(secunds1 > 34 && secunds1 < 94){
            alert(`Час на данний момент + ${secunds1}  секунд: ${time1.hours}:${time1.minutes + 1}:${secunds1 - 34}`);
        }

    }
    if(qwesh == 2){
        let secunds2 = +prompt("Введіть на яку кількість секунд ви хочете змінити час:");
        if(secunds2 < 26){
             alert(`Час на данний момент - ${secunds2} секунд: ${time1.hours}:${time1.minutes}:${time1.secunds - secunds2}`);   
        }
        if(secunds2 == 26){
            alert(`Час на данний момент - ${secunds2} секунд: ${time1.hours}:${time1.minutes}:00`);
        }
        if(secunds2 > 26 && secunds2 < 86){
            alert(`Час на данний момент - ${secunds2} секунд: ${time1.hours}:${time1.minutes - 1}:${secunds2 - 26}`);   
        }
    }
}
showtime3(time);

