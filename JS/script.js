function add() {
    console.log("working")
    var number1 = document.getElementById('input1').value
    var number2 = document.getElementById('input2').value

    if (number1 == '' || number2 == '') {

        document.getElementById('showresult').innerHTML = "Please enter an input"
    }
    else {
        number1 = parseInt(number1)
        number2 = parseInt(number2)
        var result = number1 + number2;
        console.log(result);
        document.getElementById('showresult').innerHTML = `<div>Addition of ${number1} and ${number2} is <span class="result-txt"> ${result} </span></div>`
    }

}

function subtraction() {
    var number1 = document.getElementById('input1').value
    var number2 = document.getElementById('input2').value
    if (number1 == '' || number2 == '') {
        document.getElementById('showresult').innerHTML = "Please enter an input"
    }
    else {
        number1 = parseInt(number1)
        number2 = parseInt(number2)
        var result = number1 - number2;
        console.log(result);
        document.getElementById('showresult').innerHTML = `<div>Subtraction of ${number1} and ${number2} is <span class="result-txt"> ${result} </span></div>`
    }
}
function multiplication() {
    var number1 = document.getElementById('input1').value
    var number2 = document.getElementById('input2').value
    if (number1 == '' || number2 == '') {
        document.getElementById('showresult').innerHTML = "Please enter an input"
    }
    else {
        number1 = parseInt(number1)
        number2 = parseInt(number2)
        var result = number1 * number2;
        console.log(result);
        document.getElementById('showresult').innerHTML = `<div>Multiplication of ${number1} and ${number2} is <span class="result-txt"> ${result} </span></div>`
    }
}
function division() {
    var number1 = document.getElementById('input1').value
    var number2 = document.getElementById('input2').value
    if (number1 == '' || number2 == '') {
        document.getElementById('showresult').innerHTML = "Please enter an input"
    }

    else {
        number1 = parseInt(number1)
        number2 = parseInt(number2)
        var result = number1 / number2;
        console.log(result);
        var roundedoff = Math.round(result * 10000) / 10000;
        document.getElementById('showresult').innerHTML = `<div>Division of ${number1} and ${number2} is <span class="result-txt"> ${roundedoff} </span></div>`
    }
}
