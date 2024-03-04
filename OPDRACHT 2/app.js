// OPDRACHT 2
// const chosenAnimal = prompt('Kies een dier..', 'Kikker, Paard, Koe, Leeuw, Slang of Goudvis.');

// if (chosenAnimal === 'Kikker', chosenAnimal === 'kikker') {
//     alert('Kwaakt')
// }
// else if (chosenAnimal === 'Paard', chosenAnimal === 'paard') {
//     alert('Hinnikt')
// }
// else if (chosenAnimal === 'Koe', chosenAnimal === 'koe') {
//     alert('Loeit')
// }
// else if (chosenAnimal === 'Leeuw', chosenAnimal === 'leeuw') {
//     alert('brult')
// }
// else if (chosenAnimal === 'Slang', chosenAnimal === 'slang') {
//     alert('Slist')
// }
// else if (chosenAnimal === 'Goudvis', chosenAnimal === 'goudvis') {
//     alert('Blubt')
// }
// else if (chosenAnimal === 'Je vader', chosenAnimal === 'je vader') {
//     alert('Nou ja zeg, zo kan je echt niet zijn.')
// }
// else if (chosenAnimal === 'Rat', chosenAnimal === 'rat') {
//     alert('Lijkt op jouw, awwww zielig.')
// }
// else {
//     alert('Dit dier staat helaas niet op ons systeem.')
// }

// OPDRACHT 3

const chosenAnimal = prompt('Kies een dier:', 'Kikker, Paard, Koe, Leeuw, Slang, Goudvis.');
let message = '';
switch (chosenAnimal) {
    case 'Kikker':
      message = "Kwaakt";
      break;
    case 'Paard':
      message = "Hinnikt";
      break;
    case 'Koe':
      message = "Loeit";
      break;
    case 'Leeuw':
      message = "Brult";
      break;
    case 'Slang':
      message = "Sist";
      break;
    case 'Goudvis':
      message = "Blub blub, im unda da wota";
      break;
    default:
      message = "Dit dier staat niet in ons systeem :(";
}
alert(message);