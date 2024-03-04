let grade;
function checkGrade(grade) {
    if (grade < 5.5) {
    document.body.innerHTML += "onvoldoende <br>"
    }
    else if (grade >= 5.5 && grade <= 10) {
        document.body.innerHTML += "voldoende <br>"
    }
}

checkGrade(5.5);
checkGrade(1)