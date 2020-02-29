const number1 = document.querySelector(".first");
let op = document.querySelector(".operator");
let number2 = document.querySelector(".second");
let output = document.querySelector(".output");
let is_operated = false
let op_sign;
function num1() {
    if(is_operated == false)
    {number1.textContent += 1;}
    else
    {number2.textContent += 1;}
}
function num2() {
    if(is_operated == false)
    {number1.textContent += 2;}
    else
    {number2.textContent += 2;}
}
function num3() {
    if(is_operated == false)
    {number1.textContent += 3;}
    else
    {number2.textContent += 3;}
}
function num4() {
    if(is_operated == false)
    {number1.textContent += 4;}
    else
    {number2.textContent += 4;}
}
function num5() {
    if(is_operated == false)
    {number1.textContent += 5;}
    else
    {number2.textContent += 5;}
}
function num6() {
    if(is_operated == false)
    {number1.textContent += 6;}
    else
    {number2.textContent += 6;}
}
function num7() {
    if(is_operated == false)
    {number1.textContent += 7;}
    else
    {number2.textContent += 7;}
}
function num8() {
    if(is_operated == false)
    {number1.textContent += 8;}
    else
    {number2.textContent += 8;}
}
function num9() {
    if(is_operated == false)
    {number1.textContent += 9;}
    else
    {number2.textContent += 9;}
}
function num0() {
    if(is_operated == false)
    {number1.textContent += 0;}
    else
    {number2.textContent += 0;}
}
function dot() {
    if(is_operated == false)
    {number1.textContent += ".";}
    else
    {number2.textContent += ".";}
}
function plus() {
    op.textContent = "+";
    op_sign = '+'
    is_operated = true;
}
function multi() {
    op.textContent = "x";
    op_sign = '*'
    is_operated = true;
}
function sub() {
    op.textContent = "-";
    op_sign = '-'
    is_operated = true;
}
function div() {
    op.textContent = "/";
    op_sign = '/'
    is_operated = true;
}
function mod() {
    op.textContent = "%";
    op_sign = '%'
    is_operated = true;
}
function clear_content() {
    number1.textContent = "";
    number2.textContent = "";
    op.textContent = "";
    output.textContent = 0;
    is_operated = false;
}
function equal() {
    let firstNumber = Number(number1.textContent);
    let secondNumber = Number(number2.textContent);
    switch(op_sign)
    {
        case '+':
            output.textContent = firstNumber + secondNumber;
            break;
        case '-':
            output.textContent = firstNumber - secondNumber;
            break;
        case'*':
            output.textContent = firstNumber * secondNumber;
            break;
        case'/':
            output.textContent = firstNumber / secondNumber;
            break;
        case'%':
            output.textContent = firstNumber % secondNumber;
            break;
    }
}