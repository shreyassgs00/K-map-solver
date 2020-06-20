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

            default: alert("Invalid minterm in the SOP expression. Please refresh and try again."); 
        }
    }
    return array;
}

function compareRow(array,index){
    let counter = 0;
    for (let i = 0; i < 8; i++){
        if (array[index][i] == 1)
            counter = counter + 1;
    }
    if (counter == 8)
        return true;
    else
        return false;
}

function compareColumn(array,index){
    let counter = 0;
    for (let i = 0; i < 4; i++){
        if (array[i][index] == 1)
            counter = counter + 1;
    }
    if (counter == 4)
        return true;
    else 
        return false;
}

function pushRows(index1,index2){
    let arrayRows = [];
    for (let i = 0; i < 8; i++){
        arrayRows.push([index1,i]);
    }
    for (let j = 0; j < 8; j++){
        arrayRows.push([index2,j]);
    }
    return arrayRows;
}

function push4Columns(index1,index2,index3,index4){
    array4Columns = [];
    for (let i = 0; i < 4; i++){
        array4Columns.push([i,index1]);
        array4Columns.push([index2,i]);
        array4Columns.push([index3,i]);
        array4Columns.push([index4,i]);
    }
    return array4Columns;
}

function sixteenGroup(mintermsArray){
    let sixteenArray = [];

    for (let i = 0; i < 4; i++){
        if (i!=3 && compareRow(mintermsArray,i) && compareRow(mintermsArray,i+1))
            sixteenArray.push(pushRows(i,i+1));
        if (i==3 && compareRow(mintermsArray,0) && compareRow(mintermsArray,1))
            sixteenArray.push(pushRows(0,3));
    }

    for (let j = 0; j < 5; j++){
        if (compareColumn(mintermsArray,i) && compareColumn(mintermsArray,i+1) && compareColumn(mintermsArray,i+2) && compareColumn(mintermsArray,i+3))
            sixteenArray.push(push4Columns(j,j+1,j+2,j+3));
    }

    if (compareColumn(mintermsArray,6) && compareColumn(mintermsArray,7) && compareColumn(mintermsArray,5) && compareColumn(mintermsArray,0))
        sixteenArray.push(push4Columns(0,5,6,7));
    if (compareColumn(mintermsArray,6) && compareColumn(mintermsArray,7) && compareColumn(mintermsArray,1) && compareColumn(mintermsArray,0))
        sixteenArray.push(push4Columns(0,1,6,7));
    if (compareColumn(mintermsArray,2) && compareColumn(mintermsArray,7) && compareColumn(mintermsArray,1) && compareColumn(mintermsArray,0))
        sixteenArray.push(push4Columns(0,1,2,7));    
    return sixteenArray;
}

function solve5Var(booleanExpression){
    var m = generate5VarArray(booleanExpression);
    var inputExpression = booleanExpression;
    var minterms = booleanExpression.split("+");
    let finalAnswer = '';
    var foundAnswer = false;

    if(!foundAnswer){
        if (minterms.length == 1){
            finalAnswer = inputExpression;
            foundAnswer = true;
        }
    }

    if (!foundAnswer){
        let truecounter = 0;
        let falsecounter = 0;
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 8; j++){
                if (m[i][j]==1)
                    truecounter = truecounter + 1;
                else
                    falsecounter = falsecounter + 1;
            }
        }
        if (truecounter == 32){
            finalAnswer = '1';
            foundAnswer = true;
        }
        if (falsecounter == 32){
            finalAnswer = '0';
            foundAnswer = true;
        }
    }

    var finalExpression = '';
    if (foundAnswer)
        finalExpression = finalAnswer;
    return finalExpression;
}