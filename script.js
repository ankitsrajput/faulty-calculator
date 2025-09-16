// Faulty Calculator
// Calculator logic function
function calcResult() {
    let num1 = parseFloat(document.getElementById("num_1").value);
    let num2 = parseFloat(document.getElementById("num_2").value);
    let op = document.getElementById("operator").value;
    let res;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("warnInput").innerText = "Enter only numbers."
        document.getElementById("warnInput").style.color = "red";
    }
    else {
        document.getElementById("warnInput").innerText = " ";
    }

    switch (op) {
        case '+':
            res = num1 - num2;
            break;
        case '-':
            res = num1 + num2;
            break;
        case '*':
            res = num1 / num2;
            break;
        case '/':
            res = num1 ** num2;
            break;
        default:
            res = "Error❌";
            document.getElementById("warn").innerText = "Enter only +, -, * or / .";
            document.getElementById("warn").style.color = "red";
    }
    document.getElementById("resultBox").value = res;
}