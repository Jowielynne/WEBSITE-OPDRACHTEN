let check = false;

function even(number) {
    if(number % 2 == 0){
        check = true
        document.body.innerHTML += "true <br>"
    } else {
        check = false;
        document.body.innerHTML += "false <br>"
    }
}

even(5)
even(110)
even(1300)
even(1)