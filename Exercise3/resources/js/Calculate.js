
var operatorInput = null;
var previousInput = null;
var operatorPressed = false;

function display(buttonPressed) {
    var displayArea = document.getElementById("displayArea");
    var displayAreaText = displayArea.innerText;
    //isOperator is a boolean variable which is true if the current button pressed is an operator
    var isOperator = !parseInt(buttonPressed) && buttonPressed != "." && buttonPressed != 0;


    //if an operator button is being pressed after another then set the latest button pressed as the operatorInput
    //and return from the function
    if(operatorPressed == true && isOperator == true){
        operatorInput = buttonPressed;
        return;
    }
    //if the operatorInput is '=' and the current button pressed isn't an operator (a number), then set operatorInput to null
    //resets when a number is input after equals is pressed
    if(operatorInput == "=" && isOperator == false){
        operatorInput = null;
    }
    //if the previous button pressed was an operator then clear the display
    if(operatorPressed == true){
        displayArea.innerHTML = "";
    }



    //if button pressed is an operator then the display area doesn't change
    if(isOperator == true){
        displayArea.innerHTML = displayAreaText;
    }
    //else if the display area is 0 then it changes to the button that is pressed
    else if(displayArea.innerHTML == "0"){
        displayArea.innerHTML = buttonPressed;
    }
    //else if the button pressed is a "." and there are more than one "." in the current display area then the display area doesn't change
    else if(buttonPressed == "." && displayAreaText.includes(".")) {
        displayArea.innerHTML = displayAreaText;
    }
    //else append the button pressed to the current display
    else{
        displayArea.innerHTML += buttonPressed;
    }



    operatorPressed = false;

    //if the operatorInput variable has been assigned to an operator and the current button pressed is an operator then the result function is called
    //this is to show the sum so far
    if(typeof operatorInput === 'string' && isOperator == true){
        result();
    }

    //if buttonPressed is an operator then the button pressed is assigned to the operatorInput variable
    //and the display area text is assigned to the previousInput variable. The operatorPressed variable is also set to true
    if(isOperator == true){
        operatorInput = buttonPressed;
        previousInput = document.getElementById("displayArea").innerText;
        operatorPressed = true;
    }

}


function C() {
    var displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = "0";
    operatorInput = null;
    previousInput = null;
    operatorPressed = false;
}

function result() {
    var displayArea = document.getElementById("displayArea");
    var displayAreaText = displayArea.innerText;
    var sumToEval = String(previousInput + operatorInput + displayAreaText);
    var sum = eval(sumToEval);
    displayArea.innerHTML = sum;
    previousInput = sum;



}

