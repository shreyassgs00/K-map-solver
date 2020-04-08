var finalExpression = '';
function submit(clickedButton)
{
    var inputBox = document.getElementById("inputExpression");
    finalExpression = inputBox.value;
    console.log(finalExpression);
    var splitFinalExpression = finalExpression.split("");
    if (splitFinalExpression[splitFinalExpression.length-1] == "+") 
    {
    alert("Invalid expression ending with a logical operator. Please input a valid expression");
    }

    var splitPlus = finalExpression.split("+");
    console.log(splitPlus);
    for (let i = 0; i < splitPlus.length; i++)
    {
        var splitTerm = [];
        splitTerm = splitPlus[i].split("");
        console.log(splitTerm)
        for (let j = 0; j < splitTerm.length-2; j++)
        {   
            console.log(splitTerm[j])
            for (let k = j+1; k < splitTerm.length-1; k++ )
            {   
                console.log(splitTerm[k])
                if (splitTerm[j] == splitTerm[k])
                {
                    if (splitTerm[k] != "'")
                    {
                        alert("Invalid expression as the same Boolean or complement Boolean value are used in the same term");
                        splitTerm = [];
                    }
                    else
                    {
                        continue;
                    }
                
                }
                else
                {
                    continue;
                }
            }
        }
        splitTerm = [];
    }
}



