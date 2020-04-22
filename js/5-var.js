function generate5VarArray(booleanExpression)
{
    var minterms = booleanExpression.split("+");

    var array = [];
    for (let i = 0; i < 4; i++)
    {
        array[i] = new Array(8);
    }

    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 8; j++)
        {
            array[i][j] = 0;
        }
    }

    for (let minterm of minterms)
    {
        switch (minterm)
        {
            case "A'B'C'D'E'": array[0][0]=1; break;
            case "A'B'C'D'E": array[0][1]=1; break;
            case "A'B'C'DE'": array[0][3]=1; break;
            case "A'B'C'DE": array[0][2]=1; break;

            case "A'B'CD'E'": array[1][0]=1; break;
            case "A'B'CD'E": array[1][1]=1; break;
            case "A'B'CDE'": array[1][3]=1; break;
            case "A'B'CDE": array[1][2]=1; break;

            case "A'BC'D'E'": array[3][0]=1; break;
            case "A'BC'D'E": array[3][1]=1; break;
            case "A'BC'DE'": array[3][3]=1; break;
            case "A'BC'DE": array[3][2]=1; break;

            case "A'BCD'E'": array[2][0]=1; break;
            case "A'BCD'E": array[2][1]=1; break;
            case "A'BCDE'": array[2][3]=1; break;
            case "A'BCDE": array[2][2]=1; break;

            case "AB'C'D'E'": array[0][4]=1; break;
            case "AB'C'D'E": array[0][5]=1; break;
            case "AB'C'DE'": array[0][7]=1; break;
            case "AB'C'DE": array[0][6]=1; break;

            case "AB'CD'E'": array[1][4]=1; break;
            case "AB'CD'E": array[1][5]=1; break;
            case "AB'CDE'": array[1][7]=1; break;
            case "AB'CDE": array[1][6]=1; break;

            case "ABC'D'E'": array[3][4]=1; break;
            case "ABC'D'E": array[3][5]=1; break;
            case "ABC'DE'": array[3][7]=1; break;
            case "ABC'DE": array[3][6]=1; break;

            case "ABCD'E'": array[2][4]=1; break;
            case "ABCD'E": array[2][5]=1; break;
            case "ABCDE'": array[2][7]=1; break;
            case "ABCDE": array[2][6]=1; break;
        }
    }
    return array;
}