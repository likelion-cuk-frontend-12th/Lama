function calculate()  {
    let num1 = Number(document.querySelector('.number1').value);
    let num2 = Number(document.querySelector('.number2').value); 
    let operator = document.querySelector("select[name=options]").value; 
    let result;

    switch(operator){
        case '+': 
            result = num1 + num2;
            break;

        case '-': 
            result = num1 - num2;
            break;

        case '*': 
            result = num1 * num2;
            break;

        case '/':
            if(num2 !== 0) {
                result = num1 / num2;
            } else {
                result = '오류';
            }
            break;
            
        default:
            result = 'Error';
    }
    document.getElementById('result').textContent = result;
}