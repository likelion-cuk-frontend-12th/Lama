function cal(){
let num1 = Number(document.getElementById('num1').value);
var oper = document.getElementById("cal").value;
let num2 = Number(document.getElementById('num2').value);
let result;

switch(oper){
    case '+':
        result = num1+num2;
        break;
    case '-':
        result = num1-num2;
        break;
    case '*':
        result = num1*num2;
        break;
    case '/':
        result = num1/num2;
        break;

    default:
        result="Error";
}


document.getElementById('hi').value = result;
}

