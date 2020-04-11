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

function refresh(clickedButton)
{
    var inputBox = document.getElementById("inputExpression");
    inputBox.value = '';
}

function generateKmap(clickedButton)
{
    var finalExpression = document.getElementById("inputExpression").value;
    let errorMessage = "";
    let hasFoundError = false;
    
    if (finalExpression[finalExpression.length - 1] == "+")
    {
        errorMessage = "Invalid expression ending with a logical operator. Please input a valid expression. Please refresh and try again.";
        hasFoundError = true;
    }

    const minterms = finalExpression.split("+");
    
    if (!hasFoundError)
    {
        var comparisonArray = minterms;
        for (let i = 0; i < minterms.length-1; i++)
        {
            for (let j = i+1; j < comparisonArray.length; j++)
            {
                if (minterms[i] == comparisonArray[j])
                hasFoundError = true;
                errorMessage = "Invalid input as one or more Boolean minterms are repeating. Please refresh and try again.";
                continue; 
            }
            if (hasFoundError)
                break;
        }
    }

    for (let minterm of minterms)
    {
        let tokenCounter = new Object();
        for(let token of minterm)
        {
            if(token == `'`)
                continue;
            if(!Object.keys(tokenCounter).includes(token))
                tokenCounter[token] = 0;
            tokenCounter[token] += 1;
            if(tokenCounter[token] > 1){
                errorMessage = "Invalid expression as the same Boolean constant or complement Boolean constant is used in the same minterm(s). Please refresh and try again";
                hasFoundError = true;
                break;
            }                
        }
        if(hasFoundError)
            break;
    }
    
    if(hasFoundError)
        alert(errorMessage);
}

