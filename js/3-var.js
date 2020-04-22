function generate3VarArray(booleanExpression)
{
    var minterms = booleanExpression.split("+");

    var array = [];
    for (let i = 0; i < 2; i++)
    {
        array[i] = new Array(4);
    }
    
    for (let i = 0; i < 2; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            array[i][j] = 0;
        }
    }

    for (let minterm of minterms)
    {
        switch (minterm)
        {
            case "A'B'C'": array[0][0]=1; break;
            case "A'B'C": array[0][1]=1; break;
            case "A'BC'": array[0][3]=1; break;
            case "A'BC": array[0][2]=1; break;
            
            case "AB'C'": array[1][0]=1; break;
            case "AB'C": array[1][1]=1; break;
            case "ABC'": array[1][3]=1; break;
            case "ABC": array[1][2]=1; break;
        }
    }
    return array;
}

function make2Pair(booleanExpression)
{
    
}


function solve3Var(booleanExpression)
{

    var minterms = booleanExpression.split('+');
    var m = [];

    for (let i = 0; i < 8; i++)
    {
        m[i] = 0;
    }

    var finalAnswer;

    for (let minterm of minterms)
    {
        switch (minterm)
        {
            case "A'B'C'": m[0]=1; break;
            case "A'B'C": m[1]=1; break;
            case "A'BC'": m[3]=1; break;
            case "A'BC": m[2]=1; break;
            
            case "AB'C'": m[4]=1; break;
            case "AB'C": m[5]=1; break;
            case "ABC'": m[7]=1; break;
            case "ABC": m[6]=1; break;
        }
    }

    for ( let i = 0; i < 8; i++)
    {
        let counter = 0;
        if ( m[i] ==  1 && counter < 8)
            counter = counter + 1;
        else if (counter == 8)
            finalAnswer = '1';
        else 
            break;
    }

    for ( let i = 0; i < 8; i++)
    {
        let counter = 0;
        if ( m[i] ==  0 && counter < 8)
            counter = counter + 1;
        else if (counter == 8)
            finalAnswer = '0';
        else 
            break;
    }


    return finalAnswer;
}





