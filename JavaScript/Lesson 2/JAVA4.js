let arr = [];
for (i = 0; i <= 9; i++) {
    arr.push(Math.round(Math.random() * 100 ));
}
function showArr(arr1) 
{
    let printed = "Масив:";
    for (i = 0; i <= 9; i++) {
    printed = printed + " " + arr[i];
    }
    alert(`${printed}`);
}
showArr(arr);
function showArrPar(arr1)
{
    let printed1 = "Парні елементи масива:";
    for (i = 0; i <= 9; i++) {
      if(arr[i] % 2 == 0) {
        printed1 = printed1 + " " + arr[i];
      }
        }
        alert(`${printed1}`); 
}
showArrPar(arr);
function showArrPer(arr1) 
{
    let printed2 = "Число кратне 7 в масиві:";
    for (i = 0; i <= 9; i++) {
      if(arr[i] % 7 == 0) {
        printed2 = printed2 + " " + arr[i];
      }
    }
        alert(`${printed2}`); 
}
showArrPer(arr);
function sortarr(arr1)
{
    arr = arr.sort((a, b) => b - a);
    showArr(arr);
}
sortarr(arr);
function zero(arr1)
{
    for (i = 0; i <= 9; i++) {
        if (i >= 5) {
            arr[i] = 0;
        }
    }
    showArr(arr);
}
zero(arr);
function double(arr1)
 {
    arr = arr.filter((item, index) => arr.indexOf(item) != index);
    if (arr.length > 0) {
        alert("Масив має однакові елементи");
    }
    else {
        alert("Масив не має однакових елементів");
    }
}
double(arr);



