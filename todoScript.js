let todoTitles = [];
let todoDescriptions = [];
let todoAuthor = [];
let todoDate = [];

let todoOneTitle = document.getElementById("todoOneTitle").innerHTML;
let todoOneDescription = document.getElementById("todoOneDescription").innerHTML;
let todoTwoTitle = document.getElementById("todoTwoTitle").innerHTML;
let todoTwoDescription = document.getElementById("todoTwoDescription").innerHTML;
let todoThreeTitle = document.getElementById("todoThreeTitle").innerHTML;
let todothreeDescription = document.getElementById("todoThreeDescription").innerHTML;

todoTitles = [todoOneTitle, todoTwoTitle, todoThreeTitle];
todoDescriptions = [todoOneDescription, todoTwoDescription, todothreeDescription];

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("description").onkeydown = countDown;
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}

function createTodo() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let author = document.getElementById("author").value;

    todoTitles.push(title);
    todoDescriptions.push(description);
    todoAuthor.push(author);

    const currentTitleOne = document.getElementById("todoOneTitle").innerHTML;
    const currentDescriptionOne = document.getElementById("todoOneDescription").innerHTML;

    document.getElementById("todoOneTitle").innerHTML = title;
    document.getElementById("todoOneDescription").innerHTML = description;

    if (currentTitleOne != title && currentDescriptionOne != description) {
        document.getElementById("titCL1").innerHTML = currentTitleOne;
        document.getElementById("descCL1").innerHTML = currentDescriptionOne;
        document.getElementById("autCL1").innerHTML = "Rami Bakir";
        document.getElementById("dateCL1").innerHTML = "05.01.21";
    }
    document.getElementById("overlay").style.display = "none";
}

function deleteTodoOne() {
    const delBtnOne = document.getElementById("btn-delTodo1").addEventListener("click", deleteTodoOne);
    document.getElementById("todoOneTitle").innerHTML = "";
    document.getElementById("todoOneDescription").innerHTML = "";
}

function deleteTodoTwo() {
    const delBtnTwo = document.getElementById("btn-delTodo2").addEventListener("click", deleteTodoTwo);
    document.getElementById("todoTwoTitle").innerHTML = "";
    document.getElementById("todoTwoDescription").innerHTML = "";
}

function deleteTodoThree() {
    const delBtnThree = document.getElementById("btn-delTodo3").addEventListener("click", deleteTodoThree);
    document.getElementById("todoThreeTitle").innerHTML = "";
    document.getElementById("todoThreeDescription").innerHTML = "";
}

document.getElementById("btn-cmpTodo1").addEventListener("click", event => {
    let dateObject = new Date();
    let today = dateObject.getDate() + '.' + (dateObject.getMonth() + 1) + '.' + dateObject.getFullYear();

    for (let titles = 0; titles < todoTitles.length; titles++) {
        if (todoTitles[titles] == todoOneTitle) {
            document.getElementById("titCL1").innerHTML = todoTitles[titles];
        }
    }

    for (let descriptions = 0; descriptions < todoDescriptions.length; descriptions++) {
        if (todoDescriptions[descriptions] == todoOneDescription){
            document.getElementById("descCL1").innerHTML = todoDescriptions[descriptions];
        }
    }


    document.getElementById("dateCL1").innerHTML = today.toString();
    todoDate.push(document.getElementById("dateCL1").innerHTML);

    document.getElementById("todoOneTitle").innerHTML = "";
    document.getElementById("todoOneDescription").innerHTML = "";
    console.log("please");

});

document.getElementById("btn-cmpTodo2").addEventListener("click", event => {
    let dateObject = new Date("2020-08-28");
    let today = dateObject.getDate() + '.' + (dateObject.getMonth() + 1) + '.' + dateObject.getFullYear();

    document.getElementById("titCL2").innerHTML = document.getElementById("todoTwoTitle").innerHTML;
    document.getElementById("descCL2").innerHTML = document.getElementById("todoTwoDescription").innerHTML;

    document.getElementById("dateCL2").innerHTML = today.toString();
    todoDate.push(document.getElementById("dateCL2").innerHTML);

    document.getElementById("todoTwoTitle").innerHTML = "";
    document.getElementById("todoTwoDescription").innerHTML = "";
    console.log("??????");
});

document.getElementById("btn-cmpTodo3").addEventListener("click", event => {
    let dateObject = new Date('2020-09-01');
    let today = dateObject.getDate() + '.' + (dateObject.getMonth() + 1) + '.' + dateObject.getFullYear();

    document.getElementById("titCL3").innerHTML = document.getElementById("todoThreeTitle").innerHTML;
    document.getElementById("descCL3").innerHTML = document.getElementById("todoThreeDescription").innerHTML;

    document.getElementById("dateCL3").innerHTML = today.toString();
    todoDate.push(document.getElementById("dateCL3").innerHTML);

    document.getElementById("todoThreeTitle").innerHTML = "";
    document.getElementById("todoThreeDescription").innerHTML = "";
    console.log("FAEN");
});

function countDown() {
    document.getElementById("charactersLeft").innerHTML = 125 -
        document.getElementById("description").value.length;
}

document.getElementById("dateSorting").addEventListener("change", event => {
    console.log(todoDate + " unsorted");
    if(document.getElementById("dateSorting").checked){
        for (let date = 0; date < todoDate.length; date++) {
           if (todo) {
               
           }
            console.log(todoDate + " was sorted");
        }
        //console.log(todoDate + " was sorted");
    }
});