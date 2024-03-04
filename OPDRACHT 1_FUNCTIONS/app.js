// FUNCTIONS.
let degree;

function checkDegree(degree) {
    if (degree <= 10) {
        alert('Het is koud.')
    }

    else if (degree <= 16) {
        document.body.innerHTML += 'Het is niet warm, maar het is beter om een jas te dragen. <br>'
    }

    else if (degree <= 24) {
        document.body.innerHTML += 'Het is niet koud, maar ook niet warm. <br>'
    }

    else if (degree >= 24 && degree <= 29) {
        document.body.innerHTML += 'Het is warm, je hoeft geen jas aan vandaag. <br>'
    }

    else if (degree >= 30) {
        document.body.innerHTML += 'Het is heel warm, het is beter als je je gaat insmeren. <br>'
    }
}

checkDegree(4)
checkDegree(12)
checkDegree(26)
checkDegree(32)