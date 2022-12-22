const list = document.getElementsByClassName("table table-hover")[0].querySelector("tbody");

const addBtn = document.getElementById("styled-button");
const clearBtn = document.getElementById("clear-button");
const completeBtn = document.getElementById("success");
const nameBox = document.getElementById("name");
const priceBox = document.getElementById("termin");
const rowBox = document.getElementById("prior");
const placeBox = document.getElementById("description");
const searchBox = document.getElementById("search");

let removed = [];

function tableSearch() {
    var phrase = document.getElementById('search');
    var table = document.getElementById('ToDoList-table');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}
function addItem(text, type, toLast, innrhtml = "",value) {
    let item = document.createElement(type);
    item.innerText = text;
    if (innrhtml != "")
    { 
        item.innerHTML = innrhtml;
        if(value=="x")
        {
            item.firstChild.addEventListener('click', function handleClick(event) {
              
                removed.splice(removed.indexOf(item.parentElement));
                list.removeChild(item.parentElement);
              });
        } else {
            item.firstChild.addEventListener('click', function handleClick(event) {
                console.log(item.parentElement)
                $(item.parentElement).toggleClass('success')
              });
        }
      
        item.firstChild.value = value;
    }
    if (toLast) {
        list.lastChild.appendChild(item);
    } else {
        item.className = "item";
        list.appendChild(item);
    }
}
addBtn.onclick = () => {
    if ( nameBox.value != "" &&
        priceBox.value != "" &&
        rowBox.value != "" &&
        placeBox.value != "") {
        addItem("", "tr", false);
        addItem(nameBox.value, "td", true);
        addItem(priceBox.value, "td", true);
        addItem(rowBox.value, "td", true);
        addItem(placeBox.value, "td", true);
        addItem("", "td", true, "<input type=\"button\" class=\"btn btn-success \" id = \"success\"></input>","☑");
        addItem("", "td", true, "<input type=\"button\" class=\"btn btn-danger\"></input>","x");
        
        buffer = list;
        onin();
    }
}

clearBtn.onclick = () => {console.log("asdas");
    list.innerHTML = "";
}