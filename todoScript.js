let dateObject = new Date();
let today = dateObject.getDate() + '.' + (dateObject.getMonth() + 1) + '.' + dateObject.getFullYear();

let cardOne = {
    title: document.getElementById("todoOneTitle").innerHTML,
    description: document.getElementById("todoOneDescription").innerHTML,
    author: "Rami Bakir",
    date: today,
    updated: false,
    get cardOneTitle() {
        return `${cardOne.title}`;
    },
    get cardOneDescription() {
        return `${cardOne.description}`;
    },
    get cardOneAuthor() {
        return `${cardOne.author}`;
    },
    get cardOneDate() {
        return `${cardOne.date}`;
    },
    set cardOneTitle(title) {
        this.title = title;
    },
    set cardOneDescription(description) {
        this.description = description;
    },
    set cardOneAuthor(author) {
        this.author = author;
    },
    set cardOneDate(date) {
        this.date = date;
    }
};

let cardTwo = {
    title: document.getElementById("todoTwoTitle").innerHTML,
    description: document.getElementById("todoTwoDescription").innerHTML,
    author: "Rami Bakir",
    date: today,
    updated: false,
    get cardTwoTitle() {
        return `${cardTwo.title}`;
    },
    get cardTwoDescription() {
        return `${cardTwo.description}`;
    },
    get cardTwoAuthor() {
        return `${cardTwo.author}`;
    },
    get cardTwoDate() {
        return `${cardTwo.date}`;
    },
    set cardTwoTitle(title) {
        this.title = title;
    },
    set cardTwoDescription(description) {
        this.description = description;
    },
    set cardTwoAuthor(author) {
        this.author = author;
    },
    set cardTwoDate(date) {
        this.date = date;
    }
};

let cardThree = {
    title: document.getElementById("todoThreeTitle").innerHTML,
    description: document.getElementById("todoThreeDescription").innerHTML,
    author: "Rami Bakir",
    date: today,
    updated: false,
    get cardThreeTitle() {
        return `${cardThree.title}`;
    },
    get cardThreeDescription() {
        return `${cardThree.description}`;
    },
    get cardThreeAuthor() {
        return `${cardThree.author}`;
    },
    get cardThreeDate() {
        return `${cardThree.date}`;
    },
    set cardThreeTitle(title) {
        this.title = title;
    },
    set cardThreeDescription(description) {
        this.description = description;
    },
    set cardThreeAuthor(author) {
        this.author = author;
    },
    set cardThreeDate(date) {
        this.date = date;
    }
};

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("description").onkeydown = countDown;
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("btn-cmpTodo1").addEventListener("click", event => {
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
    document.getElementById("titCL2").innerHTML = document.getElementById("todoTwoTitle").innerHTML;
    document.getElementById("descCL2").innerHTML = document.getElementById("todoTwoDescription").innerHTML;

    document.getElementById("dateCL2").innerHTML = today.toString();
    todoDate.push(document.getElementById("dateCL2").innerHTML);

    document.getElementById("todoTwoTitle").innerHTML = "";
    document.getElementById("todoTwoDescription").innerHTML = "";
    console.log("??????");
});

document.getElementById("btn-cmpTodo3").addEventListener("click", event => {
    document.getElementById("titCL3").innerHTML = document.getElementById("todoThreeTitle").innerHTML;
    document.getElementById("descCL3").innerHTML = document.getElementById("todoThreeDescription").innerHTML;

    document.getElementById("dateCL3").innerHTML = today.toString();
    todoDate.push(document.getElementById("dateCL3").innerHTML);

    document.getElementById("todoThreeTitle").innerHTML = "";
    document.getElementById("todoThreeDescription").innerHTML = "";
    console.log("FAEN");
});

document.getElementById("btn-createTodo").addEventListener("click", event => {
    let newTodo = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        author: document.getElementById("author").value,
        date: today,
        get newTitle() {
            return `${newTodo.title}`;
        },
        get newDescription() {
            return `${newTodo.description}`;
        },
        get newAuthor() {
            return `${newTodo.author}`;
        },
        get newDate() {
            return `${newTodo.date}`;
        }
    };

    if(cardOne.updated == false){
        document.getElementById("todoOneTitle").innerHTML = newTodo.newTitle;
        cardOne.cardOneTitle = document.getElementById("todoOneTitle").innerHTML;

        document.getElementById("todoOneDescription").innerHTML = newTodo.newDescription;
        cardOne.description.innerHTML = document.getElementById("todoOneDescription").innerHTML;

        cardOne.cardOneAuthor = newTodo.author;
        cardOne.cardOneDate = newTodo.newDate;

        cardOne.updated = true;
        console.log("CardOne: ");
        console.log(cardOne);

    }
    else if(cardTwo.updated == false){
        document.getElementById("todoTwoTitle").innerHTML = newTodo.newTitle;
        cardTwo.cardTwoTitle = document.getElementById("todoTwoTitle").innerHTML;

        document.getElementById("todoTwoDescription").innerHTML = newTodo.newDescription;
        cardTwo.cardTwoDescription = document.getElementById("todoTwoDescription").innerHTML;

        cardTwo.cardTwoAuthor = newTodo.newAuthor;
        cardTwo.cardTwoDate = newTodo.newDate;

        cardTwo.updated = true;
        console.log("CardTwo: ");
        console.log(cardTwo);
    }
    else if(cardThree.updated == false){
        document.getElementById("todoThreeTitle").innerHTML = newTodo.newTitle;
        cardThree.cardThreeTitle = document.getElementById("todoThreeTitle").innerHTML;

        document.getElementById("todoThreeDescription").innerHTML = newTodo.newDescription;
        cardThree.cardThreeDescription = document.getElementById("todoThreeDescription").innerHTML;

        cardThree.cardThreeAuthor = newTodo.newAuthor;
        cardThree.cardThreeDate = newTodo.newDate;
        
        cardThree.updated = true;
        console.log("CardThree: ");
        console.log(cardThree);
    }

    if(cardOne.updated == true){
        setInterval(() => {
            cardOne.updated = false;
        }, 30000);
    }
    if(cardTwo.updated == true){
        setInterval(() => {
            cardTwo.updated = false;
        }, 30000);
    }
    if(cardThree.updated == true){
        setInterval(() => {
            cardThree.updated = false;
        }, 30000);
    }

    document.getElementById("overlay").style.display = "none";
});

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

function countDown() {
    document.getElementById("charactersLeft").innerHTML = 125 -
        document.getElementById("description").value.length;
}

document.getElementById("dateSorting").addEventListener("change", event => {
    console.log(todoDate + " unsorted");
    if(document.getElementById("dateSorting").checked){
        for (let date = 0; date < todoDate.length; date++) {
           if (date > todoDate[date]) {
               
           }
            console.log(todoDate + " was sorted");
        }
    }
});