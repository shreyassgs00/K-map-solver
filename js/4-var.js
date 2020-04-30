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

function findOctet(object){
    
}

function generateMinterm4Dict(booleanExpression){
    
    minterms = booleanExpression.split("+");
    mintermsObject = {};
    for (let i = 0;i < 16; i++){
        mintermsObject[i] = 0;
    }

    for (let minterm of minterms){
        switch(minterm){
            case "A'B'C'D'": mintermsObject[0] = 1; break;
            case "A'B'C'D": mintermsObject[1] = 1; break;
            case "A'B'CD'": mintermsObject[3] = 1; break;
            case "A'B'CD": mintermsObject[2] = 1; break;

            case "A'BC'D'": mintermsObject[4] = 1; break;
            case "A'BC'D": mintermsObject[5] = 1; break;
            case "A'BCD'": mintermsObject[7] = 1; break;
            case "A'BCD": mintermsObject[6] = 1; break;
             
            case "AB'C'D'": mintermsObject[12] = 1; break;
            case "AB'C'D": mintermsObject[13] = 1; break;
            case "AB'CD'": mintermsObject[15] = 1; break;
            case "AB'CD":  mintermsObject[14] = 1; break;
            
            case "ABC'D'": mintermsObject[8] = 1; break;
            case "ABC'D":  mintermsObject[9] = 1; break;
            case "ABCD'":  mintermsObject[11] = 1; break;
            case "ABCD":  mintermsObject[10] = 1; break;
        }
    }
    return mintermsObject;
}

function solve4Var(booleanExpression){
    var m = generateMinterm4Dict(booleanExpression);
    var inputExpression = booleanExpression;
    var minterms = booleanExpression.split("+");
    var finalAnswer = '';
    var foundAnswer = false;

    if (!foundAnswer){
        if (minterms.length == 1){
            finalAnswer = inputExpression;
            foundAnswer = true;
        }
    }

    if (!foundAnswer){
        let counter = 0;
        for (element in m){
            if (m[element]==1)
                counter += 1;
        }
        if (counter==16){
            finalAnswer = '1';
            foundAnswer = true;
        }
    }

    if (!foundAnswer){
        let counter = 0;
        for (element in m){
            if (m[element]==0)
                counter += 1;
        }
        if (counter==16){
            finalAnswer = '0';
            foundAnswer = true;
        }
    }



    if (foundAnswer)
        var finalExpression = finalAnswer;
    return finalExpression;
}
