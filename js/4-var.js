function generate4VarArray(booleanExpression)
{
    var minterms = booleanExpression.split("+");

    var array = [];
    for (let i = 0; i < 4; i++)
    {
        array[i] = new Array(4);
    }

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

            default: alert("Invalid minterm in the SOP expression. Please refresh and try again."); 
        }
    } 
    return array;
}

function findOctet(array){

}

function generateMinterm4Dict(booleanExpression){
    
    minterms = booleanExpression.split("+");
    mintermsArray = [];
    for (let i = 0; i < 16; i++){
        mintermsArray[i] = 0;
    }

    for (let minterm of minterms){
        switch(minterm){
            case "A'B'C'D'": mintermsArray[0]=1; break;
            case "A'B'C'D": mintermsArray[1]=1; break;
            case "A'B'CD'": mintermsArray[3]=1; break;
            case "A'B'CD": mintermsArray[2]=1; break;

            case "A'BC'D'": mintermsArray[4]=1; break;
            case "A'BC'D": mintermsArray[5]=1; break;
            case "A'BCD'": mintermsArray[7]=1; break;
            case "A'BCD": mintermsArray[6]=1; break;
            
            case "AB'C'D'": mintermsArray[12]=1; break;
            case "AB'C'D": mintermsArray[13]=1; break;
            case "AB'CD'": mintermsArray[15]=1; break;
            case "AB'CD": mintermsArray[14]=1; break;
            
            case "ABC'D'": mintermsArray[8]=1; break;
            case "ABC'D": mintermsArray[9]=1; break;
            case "ABCD'": mintermsArray[11]=1; break;
            case "ABCD": mintermsArray[10]=1; break;
        }
    }
    return mintermsArray;
}

function solve4Var(booleanExpression){

    var m = generateMinterm4Array(booleanExpression);
    var inputExpression = booleanExpression;
    var minterms = booleanExpression.split("+");
    var finalAnswer = '';
    var foundAnswer = true;

    if (!foundAnswer){
        if (minterms.length == 1){
            finalAnswer = inputExpression;
            foundAnswer = true;
        }
    }
}