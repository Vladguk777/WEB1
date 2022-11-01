//Завдання 3.1
let number= +prompt("Введіть початкову цифру з діапазону:");
let number1= +prompt("Введіть кінцеву цифру з діапазону:");
let arr = [];
let sum = number;
let k = 0;
for(number; number <= number1; number++)
{
    arr.push([number]);
    k++;
}
for(i = 1; i < k; i++)
{
    sum = sum + parseInt(arr[i]);
}
alert(`Сум цифр у вашому діапазоні: ${sum}`);
//Завдання 3.2
let number2 = +prompt("Введіть число:");
number2 = number2.toString().length;
alert(`Кількість цифр у числі: ${number2}`);
//Завдання 3.3
let number3 = 0;
let positive = 0;
let negative = 0;
let nulll = 0;
let par = 0;
let notpar = 0;
for(i = 0; i < 10; i++)
{
    number3 = +prompt(`Введіть число ${i}:`);
        if (number3 > 0)
        {
            positive++;
        }
        if (number3 < 0) 
        {
            negative++;
        }
        if (number3 == 0)
        {
            nulll++;
        }
        if (number3 % 2 == 0)
        {
            par++;
        }
        if (number3 % 2 != 0)
        {
            notpar++;
        }
}
alert(`Позитивних: ${positive} Негативних: ${negative} Нулів: ${nulll} Парних: ${par} Непарних: ${notpar}`);
//Завдання 3.4
let confirm1 = true;
let dayString = "Понеділок";
do {
    confirmed = confirm(`${dayString}. Хочете побачити наступний день?`);
    switch (dayString) {
        case "Понеділок":
            dayString = "Вівторок"
            break;
        case "Вівторок":
            dayString = "Середа"
            break;
        case "Середа":
            dayString = "Четвер"
            break;
        case "Четвер":
            dayString = "П'ятниця"
            break;
        case "П'ятниця":
            dayString = "Субота"
            break;
        case "Субота":
            dayString = "Неділя"
            break;
        case "Неділя":
            dayString = "Понеділок"
            break;
    }
}
while (confirm1);