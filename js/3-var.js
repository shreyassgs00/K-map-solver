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



