// Завдання 1.1
let year = prompt("Який ваш рік народження?");
const Rick_zaraz = 2022;
alert(`Ваш вік: ${Rick_zaraz - year} років`);
//Завдання 1.2
let GB = prompt("Вкажіть обсяг флешки в Гб:");
const file = 820;
let fleshka = GB * 1000;
alert(`В вашу флешку вміститься: ${Math.round(fleshka / file)} файлів обсягом 820 Мб`);
//Завдання 2.1
let number= prompt("Введіть число від 0 до 9:");
if(number == 1)
{
alert(`Під цим числом знаходиться символ: !`);
}
if(number == 2)
{
alert(`Під цим числом знаходиться символ: @`);
}
if(number == 3)
{
alert(`Під цим числом знаходиться символ: #`);
}
if(number == 4)
{
alert(`Під цим числом знаходиться символ: $`);
}
if(number == 5)
{
alert(`Під цим числом знаходиться символ: %`);
}
if(number == 6)
{
alert(`Під цим числом знаходиться символ: ^`);
}
if(number == 7)
{
alert(`Під цим числом знаходиться символ: &`);
}
if(number == 8)
{
alert(`Під цим числом знаходиться символ: *`);
}
if(number == 9)
{
alert(`Під цим числом знаходиться символ: (`);
}
//Завдання 2.2
let rick= prompt("Введіть рік на перевірку:");

if(rick % 400 == 0 || rick % 4 == 0 && rick % 100 != 0)
{
    alert(`Цей рік - високосний`);
}
else
 {
    alert(`Цей рік - не високосний`);
}
//Завдання 2.3
let data = +prompt("Введіть день:");
let data1 = +prompt("Введіть місяць:");
let data2 = +prompt("Введіть рік:");
if(data1 == 12 && data == 31)
{
    data = 1;
    data1 = 1;
    alert(`Наступна дата: ${data}.${data1}.${data2 + 1}`);
    exit;
}
if(data == 31)
{
    data = 1;
    alert(`Наступна дата: ${data}.${data1 + 1}.${data2}`);
    exit;
}
if(data2 % 400 == 0 || data2 % 4 == 0 && data2 % 100 != 0 && data1 == 2 || data1 == 02 && data == 28)
{
    alert(`Наступна дата: ${data + 1}.${data1}.${data2}`);
    exit;
}
if(data1 == 2 || data1 == 02 && data == 28)
{
    data = 1;
    data1 = 3;
    alert(`Наступна дата: ${data}.${data1}.${data2}`);
    exit;
}
else 
{
    alert(`Наступна дата: ${data + 1}.${data1}.${data2}`);
}




