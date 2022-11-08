 let name11 = "Hello world my name is Vlad";
function probel(name1) 
{
    index = 0, 
    probell = 0;
    while ((index = name1.indexOf(' ', index + 1)) > 0) { 
        probell++; 
    }
    alert(`Рядок має ${probell} пробілів`);
}
probel(name11);
function first(name1)
{
    name1 = name1[0].toUpperCase() + name1.substring(1, name1.length);
    alert(name1);
}
first(name11);
function slova(name1)
{
    let matches = name11.match(/\S+/g) || [];
alert(`Рядок має: ${matches.length} слів`);
}
slova(name11);
function palindrome(name1)
{
    let wer = name1.split("").reverse().join("");
    if (name1 == wer)
    {
        alert("Рядок є паліндромом");
    }
    else
    {
        alert("Рядок не є паліндромом");
    }
}
palindrome(name11);
