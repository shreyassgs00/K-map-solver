function generate3VarArray(booleanExpression)
{
    var minterms = booleanExpression.split("+");

    var array = [[],[]];
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


function solve3Var(booleanExpression)
{

    var minterms = booleanExpression.split('+');
    const m0 = m1 = m2 = m3 = m4 = m5 = m6 = m7 = 0;
    var finalAnswer;

    for (let minterm of minterms)
    {
        switch (minterm)
        {
            case "A'B'C'": m0=1; break;
            case "A'B'C": m1=1; break;
            case "A'BC'": m3=1; break;
            case "A'BC": m2=1; break;
            
            case "AB'C'": m4=1; break;
            case "AB'C": m5=1; break;
            case "ABC'": m7=1; break;
            case "ABC": m6=1; break;
        }
    }

    if (m0 ==1 && m1 ==1 && m2 ==1 && m3 ==1 && m4 ==1 && m5 ==1 && m6 ==1 && m7 ==1 )
    {
        finalAnswer = '1';
    }

        

    return finalAnswer;
    
}





