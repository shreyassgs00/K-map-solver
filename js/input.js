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
    console.log(finalExpression);
    let errorMessage = "";
    let hasFoundError = false;
    
    if (finalExpression[finalExpression.length - 1] == "+") {
        errorMessage = "Invalid expression ending with a logical operator. Please input a valid expression. Please refresh and try again.";
        hasFoundError = true;
    }

    const minterms = finalExpression.split("+");

    for (let minterm of minterms)
    { // Check for repeating characters in each minterm
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



    if (!hasFoundError) {
        let minterm = new Array();
        for (let i = 0; i < minterms.length; i++) {
            minterm.push(minterms[i].split(''))
            for (let j = 0; j < minterm[i].length; j++) {
                if (minterm[i][j+1] == "'") {
                    minterm[i][j] = minterm[i][j] + "'";
                    minterm[i].splice(j, 1);
                }
            }
            if(minterm[i].length < 3 || minterm[i].length >= 6){
                hasFoundError = true;
                errorMessage = "Invalid minterm(s) in the expression which is input. Please refresh and try again.";
                break;
            }
            minterm[i].sort();            
        }
        
        let mintermRepetitionObject = new Object();
        for (let i = 0; i < minterm.length && !hasFoundError; i++) {
            const mintermString = minterm[i].join('');
            if (mintermRepetitionObject[mintermString] === undefined)
                mintermRepetitionObject[mintermString] = 0;
            mintermRepetitionObject[mintermString] += 1;
            if(mintermRepetitionObject[mintermString] >= 2){
                hasFoundError = true;
                errorMessage =  "Invalid input as one or more Boolean minterms are repeating. Please refresh and try again.";
                break;
            }
        }
    }    

    if(hasFoundError)
        alert(errorMessage);
}

