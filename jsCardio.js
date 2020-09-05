// Lage et main HTML element
const createMain = document.createElement('main');
// Legge den til body
document.body.appendChild(createMain);

const main = document.getElementsByTagName("main")[0];
// Lage en paragraph
const paragraf = document.createElement('p');
// Legge til "Jeg trener på JavaScript" i en paragraf
paragraf.innerHTML = "Jeg trener på JavaScript";
// Gi denne en klasse
paragraf.classList.add("jsCardioParagraph");
// Legge den til main elementet
main.appendChild(paragraf);
// Lage en select box
const selectBox = document.createElement('select');
main.appendChild(selectBox);
// Populere selectboksen basert på et object / array(Ex.const myObj = [{ id: 1, data: "text" }, { id: 2, date: "text2"])
const optGroup1 = document.createElement('optgroup');
optGroup1.label = "ID: 1";
const option1 = document.createElement('option');
option1.innerHTML = "text";

const optGroup2 = document.createElement('optgroup');
optGroup2.label = "ID: 2";
const option2 = document.createElement('option');
option2.innerHTML = "text2";

selectBox.appendChild(optGroup1);
selectBox.appendChild(optGroup2);
optGroup1.appendChild(option1);
optGroup2.appendChild(option2);
// I main sentrere selectboksen og sette maksbredde til 500px
selectBox.style.width = "500px";
selectBox.style.textAlign = "center";
// Lage to knapper(test og reset)
const testButton = document.createElement('button');
testButton.type = "button";
testButton.value = "Test";
testButton.innerHTML = "Test";

const resetButton = document.createElement('button');
resetButton.innerHTML = "Reset";
resetButton.type = "button";
resetButton.value = "Reset";
// Legge disse til etter selectboksen
selectBox.parentNode.insertBefore(testButton, selectBox.nextSibling);
selectBox.parentNode.insertBefore(resetButton, selectBox.nextSibling);
// Lage en "click" eventlistener på knappene
let words = paragraf.innerHTML.split(" "); //.split() returns array
let splitWord = [];

testButton.addEventListener("click", event => {
    for (let i = 0; i < words.length; i++) {
        splitWord.push(words[i].replace(words[i].substr(0, 1), ''));
    }

    paragraf.innerHTML = splitWord.reverse().join(" ");
});

resetButton.addEventListener("click", event => {
    for (let i = 0; i <= 3; i++) {
        let li = document.createElement('li');
        let liButton = document.createElement('button');
        uList.appendChild(li);
        li.appendChild(liButton);

        li.id = "liTag" + i;

        liButton.innerHTML = "Delete";
        liButton.id = "liButton" + i;
    }
});

// Klikk på test knappen skal skrive ut teksten i paragrafen.Utskriften skal være reversert og første bokstav er fjernet i hvert ord. (Enten som ny < p > eller i den "gamle" <p>)
// Lage en ul med 4 listeelementer
// Legge til en deleteknappe til hvert listeelement
// Legge til eventlistener for å fjerne et og et element med klikk på delete
// Klikk på reset for å få tilbake alle listeelementene

const uList = document.createElement('ul');
testButton.parentNode.insertBefore(uList, testButton.nextSibling);

for (let i = 0; i <= 3; i++) {
    let li = document.createElement('li');
    let liButton = document.createElement('button');
    uList.appendChild(li);
    li.appendChild(liButton);

    li.id = "liTag" + i;

    liButton.innerHTML = "Delete";
    liButton.id = "liButton" + i;
}

document.getElementById("liButton0").addEventListener("click", event => {
    let removedLi0 = document.getElementById("liTag0");

    removedLi0.remove();
});

document.getElementById("liButton1").addEventListener("click", event => {
    let removedLi1 = document.getElementById("liTag1");

    removedLi1.remove();
});

document.getElementById("liButton2").addEventListener("click", event => {
    let removedLi2 = document.getElementById("liTag2");

    removedLi2.remove();
});

document.getElementById("liButton3").addEventListener("click", event => {
    let removedLi3 = document.getElementById("liTag3");

    removedLi3.remove();
});