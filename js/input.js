function concatExpression(clickedButton)
{
    var inputClick = clickedButton.innerHTML;
    var inputBox = document.getElementById("inputExpression");
    inputBox.value = inputBox.value + inputClick; 
    
}

function backspace(clickedButton)
{
    var inputBox = document.getElementById("inputExpression");
    var splitInputArray = inputBox.value.split('');
    splitInputArray.pop();
    inputBox.value = '';
    let splitlength = splitInputArray.length;
    for (let i = 0; i < splitlength; i++)
    {
        inputBox.value = inputBox.value+splitInputArray[i];
    }
    
}

var finalExpression = '';
function submit(clickedButton)
{
    var inputBox = document.getElementById("inputExpression");
    finalExpression = inputBox.value;
    console.log(finalExpression);
}

