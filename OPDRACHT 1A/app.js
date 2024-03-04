const time = prompt('Hoelaat is het?');
if (time >= 6 && time <= 12) {
    alert('Ochtend')
}
else if (time >= 12 && time <= 18) {
    alert('Middag')
}
else if (time >= 18 && time <= 24) {
    alert('Avond')
}
else if (time <= 24 && time <= 6) {
    alert('Nacht')
}