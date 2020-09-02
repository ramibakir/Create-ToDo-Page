let todoTitles = [];
let todoDescriptions = [];
let todoAuthor = [];

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("description").onkeydown = countDown;
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}

function getCurrentTodos() {
    /* Fill arrays with HTML */
    let todoOneTitle = document.getElementById("todoOneTitle").innerHTML;
    let todoOneDescription = document.getElementById("todoOneDescription").innerHTML;
    let todoTwoTitle = document.getElementById("todoTwoTitle").innerHTML;
    let todoTwoDescription = document.getElementById("todoTwoDescription").innerHTML;
    let todoThreeTitle = document.getElementById("todoThreeTitle").innerHTML;
    let todothreeDescription = document.getElementById("todoThreeDescription").innerHTML;

    /* Arrays */
    todoTitles = [todoOneTitle, todoTwoTitle, todoThreeTitle];
    todoDescriptions = [todoOneDescription, todoTwoDescription, todothreeDescription];
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

function completeTodoOne(){
    const cmpBtnOne = document.getElementById("btn-cmpTodo1").addEventListener("click", completeTodoOne);
    let completedTitle = document.getElementById("todoOneTitle").innerHTML;
    let completedDescription = document.getElementById("todoOneDescription").innerHTML;
    let tableContentTitle = document.getElementById("titCL1").innerHTML = completedTitle;
    let tableContentDescription = document.getElementById("descCL1").innerHTML = completedDescription;
    
    document.getElementById("todoOneTitle").innerHTML = "";
    document.getElementById("todoOneDescription").innerHTML = "";
}

function completeTodoTwo() {
    const cmpBtnTwo = document.getElementById("btn-cmpTodo2").addEventListener("click", completeTodoTwo);

    let completedTitle = document.getElementById("todoTwoTitle").innerHTML;
    let completedDescription = document.getElementById("todoTwoDescription").innerHTML;
    let tableContentTitle = document.getElementById("titCL2").innerHTML = completedTitle;
    let tableContentDescription = document.getElementById("descCL2").innerHTML = completedDescription;
    
    document.getElementById("todoTwoTitle").innerHTML = "";
    document.getElementById("todoTwoDescription").innerHTML = "";
}

function completeTodoThree() {
    const cmpBtnThree = document.getElementById("btn-cmpTodo3").addEventListener("click", completeTodoThree);

    let completedTitle = document.getElementById("todoThreeTitle").innerHTML;
    let completedDescription = document.getElementById("todoThreeDescription").innerHTML;
    let tableContentTitle = document.getElementById("titCL3").innerHTML = completedTitle;
    let tableContentDescription = document.getElementById("descCL3").innerHTML = completedDescription;
    
    document.getElementById("todoThreeTitle").innerHTML = "";
    document.getElementById("todoThreeDescription").innerHTML = "";
}

function countDown() {
    document.getElementById("charactersLeft").innerHTML = 125 -
        document.getElementById("description").value.length;
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

    if(currentTitleOne != title && currentDescriptionOne != description){
        document.getElementById("titCL1").innerHTML = currentTitleOne;
        document.getElementById("descCL1").innerHTML = currentDescriptionOne;
        document.getElementById("autCL1").innerHTML = "Rami Bakir";
        document.getElementById("dateCL1").innerHTML = "05.01.21";
    }


    document.getElementById("overlay").style.display = "none";

}