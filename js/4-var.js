function generate4VarArray(booleanExpression)
{
    var minterms = booleanExpression.split("+");

    var array = [[],[]];
    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            array[i][j] = 0;
        }
    }

    for (let minterm of minterms)
    {
        switch(minterm)
        {
            case "A'B'C'D'": array[0][0]=1; break;
            case "A'B'C'D": array[0][1]=1; break;
            case "A'B'CD'": array[0][3]=1; break;
            case "A'B'CD": array[0][2]=1; break;

            case "A'BC'D'": array[1][0]=1; break;
            case "A'BC'D": array[1][1]=1; break;
            case "A'BCD'": array[1][3]=1; break;
            case "A'BCD": array[1][2]=1; break;
            
            case "AB'C'D'": array[3][0]=1; break;
            case "AB'C'D": array[3][1]=1; break;
            case "AB'CD'": array[3][3]=1; break;
            case "AB'CD": array[3][2]=1; break;
            
            case "ABC'D'": array[2][0]=1; break;
            case "ABC'D": array[2][1]=1; break;
            case "ABCD'": array[2][3]=1; break;
            case "ABCD": array[2][2]=1; break;
        }
    } 
    return array;
}