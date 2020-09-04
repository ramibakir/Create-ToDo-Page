// Lage et main HTML element
const createMain = document.createElement('main');
// Legge den til body
document.body.appendChild(createMain);

const main = document.getElementsByTagName("main");
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
// Populere selectboksen basert på et object / array(Ex.const myObj = [{ id: 1, data: "text" }, { id: 2, date: "text2"])
const optGroup1 = document.createElement('optgroup');
optGroup1.label = "ID: 1";
const option1 = document.createElement('option');
option1.value = "text";

selectBox.appendChild(optGroup1);
optGroup1.appendChild(option1);
// I main sentrere selectboksen og sette maksbredde til 500px
selectBox.style.width = "500px";
selectBox.style.textAlign = "center";
// Lage to knapper(test og reset)
const testButton = document.createElement('button');
testButton.type = "button";
testButton.value = "Test";

const resetButton = document.createElement('button');
resetButton.type = "button";
resetButton.value = "Reset";
// Legge disse til etter selectboksen
selectBox.parentNode.insertBefore(testButton, selectBox.nextSibling);
// Lage en "click" eventlistener på knappene
// Klikk på test knappen skal skrive ut teksten i paragrafen.Utskriften skal være reversert og første bokstav er fjernet i hvert ord. (Enten som ny < p > eller i den "gamle" <p>)
// Lage en ul med 4 listeelementer
// Legge til en deleteknappe til hvert listeelement
// Legge til eventlistener for å fjerne et og et element med klikk på delete
// Klikk på reset for å få tilbake alle listeelementene
