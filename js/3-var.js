let finalExpression = '';
function submit(clickedButton)
{
    const inputBox = document.getElementById("inputExpression");
    let errorMessage = "";
    let hasFoundError = false;
    finalExpression = inputBox.value;
    
    if (finalExpression[finalExpression.length - 1] == "+"){
        errorMessage = "Invalid expression ending with a logical operator. Please input a valid expression";
        hasFoundError = true;
    }        

    const minterms = finalExpression.split("+");
    for (let minterm of minterms)
    {
        let tokenCounter = new Object();
        for(let token of minterm){
            if(token == `'`)
                continue;
            if(!Object.keys(tokenCounter).includes(token))
                tokenCounter[token] = 0;
            tokenCounter[token] += 1;
            if(tokenCounter[token] > 1){
                errorMessage = "Invalid expression as the same Boolean or complement Boolean value are used in the same term";
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