var finalExpression = '';
function submit(clickedButton)
{
    var inputBox = document.getElementById("inputExpression");
    finalExpression = inputBox.value;
    console.log(finalExpression);
    var splitFinalExpression = finalExpression.split("");
    if (splitFinalExpression[splitFinalExpression.length-1] == "+") 
    {
    alert("Invalid expression ending with a logical operator");
    }
}



