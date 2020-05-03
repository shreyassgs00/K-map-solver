function generate4VarArray(booleanExpression){
    var minterms = booleanExpression.split("+");

    var array = [];
    for (let i = 0; i < 4; i++){
        array[i] = new Array(4);
    }

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            array[i][j] = 0;
        }
    }

    for (let minterm of minterms){
        switch(minterm){
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

function compareRow(array,index,valueToBeCompared){
    let counter = 0;
    for (let j = 0; j < 4; j++){
        if (array[index][j]==valueToBeCompared)
            counter += 1;
    }
    if (counter==4)
        return true;
    else
        return false;
}

function compareColumn(array,index,valueToBeCompared){
    let counter = 0;
    for (let i = 0; i < 4; i++){
        if (array[i][index] == valueToBeCompared)
            counter += 1;
    }
    if (counter==4)
        return true;
    else
        return false;
}

function pushRows(index1,index2){
    let pushedArrayRow = [];
    for (let i = 0; i < 4; i++){
        pushedArrayRow.push([index1,i]);
    }
    for (let j = 0; j < 4; j++){
        pushedArrayRow.push([index2,j]);
    }
    return pushedArrayRow;
}

function pushColumns(index1,index2){
    let pushedArrayColumn = [];
    for (let i = 0; i < 4; i++){
        pushedArrayColumn.push([i,index1]);
    }
    for (let j = 0; j < 4; j++){
        pushedArrayColumn.push([j,index2]);
    }
    return pushedArrayColumn;
}

function findOctets(mintermsArray){
    let octetArray = [];
    for (let i = 0; i < 4; i++){
        if (i!=3 && compareRow(mintermsArray,i,1) && compareRow(mintermsArray,i+1,1))
            octetArray.push(pushRows(i,i+1));
        if (i==3 && (compareRow(mintermsArray,0,1) && compareRow(mintermsArray,3,1)))
            octetArray.push(pushRows(0,3));
    }

    for (let j = 0; j < 4; j++){
        if (j!=3 && compareColumn(mintermsArray,j,1) && compareColumn(mintermsArray,j+1,1))
            octetArray.push(pushColumns(j,j+1));
        if (j==3 && compareColumn(mintermsArray,0,1) && compareColumn(mintermsArray,3,1))
            octetArray.push(pushColumns(0,3));
    }
    return octetArray;
}

function pushRow(index){
    let pushedArrayRow = [];
    for (let i = 0; i < 4; i++){
        pushedArrayRow.push([index,i]);
    }
    return pushedArrayRow;
}

function pushColumn(index){
    let pushedArrayColumn = [];
    for (let i = 0; i < 4; i++){
        pushedArrayColumn.push([i,index]);
    }
    return pushedArrayColumn;
}

function findQuads(mintermsArray){
    let quadArray = [];
    for (let i = 0; i < 4; i++){
        if (compareRow(mintermsArray,i,1))
            quadArray.push(pushRow(i))
        if (compareColumn(mintermsArray,i,1))
            quadArray.push(pushColumn(i))
    }
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (mintermsArray[i][j]==1 && mintermsArray[i][j+1]==1 && mintermsArray[i+1][j]==1 && mintermsArray[i+1][j+1]==1)
                quadArray.push([[i,j],[i,j+1],[i+1,j],[i+1,j+1]]);
        }
    }
    for (let i = 0; i < 3; i++){
        if (mintermsArray[0][i]==1 && mintermsArray[3][i]==1 && mintermsArray[0][i+1]==1 && mintermsArray[3][i+1]==1)
            quadArray.push([[0,i],[0,i+1],[3,i],[3,i+1]]);
    }
    for (let i = 0; i < 3; i++){
        if (mintermsArray[i][0]==1 && mintermsArray[i][3]==1 && mintermsArray[i+1][0]==1 && mintermsArray[i+1][3]==1)
            quadArray.push([[i,0],[i+1,0],[i,3],[i+1,3]]);
    }
    return quadArray;
}

function findPairs(mintermsArray){
    let pairArray = [];
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (mintermsArray[i][j]==1 && mintermsArray[i][j+1]==1)
                pairArray.push([[i,j],[i,j+1]]);
            if (mintermsArray[i][j]==1 && mintermsArray[i+1][j]==1)
                pairArray.push([[i,j],[i+1,j]]);
        }
    }
    for (let i = 0; i < 4; i++){
        if (mintermsArray[0][i]==1 && mintermsArray[3][i]==1)
            pairArray.push([[0,i],[3,i]]);
    }
    for (let i = 0; i < 4; i++){
        if (mintermsArray[i][0]==1 && mintermsArray[i][3]==1)
            pairArray.push([[i,0],[i,3]]);
    }
    for (let i = 0; i < 3; i++){
        if (mintermsArray[i][3]==1 && mintermsArray[i+1][3]==1)
            pairArray.push([[i,3],[i+1,3]]);
    }
    return pairArray;
    
}

function convertMultiToGrid(combinedArray){
    gridArray = [];
    for (let i = 0; i < combinedArray.length; i++){
        array = [];
        for (let j = 0; j < combinedArray[i].length; j++){
            var element = combinedArray[i][j].join('');
            switch (element){
                case '00': array.push(0); break;
                case '01': array.push(1); break;
                case '02': array.push(3); break;
                case '03': array.push(2); break;

                case '10': array.push(4); break;
                case '11': array.push(5); break;
                case '12': array.push(7); break;
                case '13': array.push(6); break;

                case '20': array.push(12); break;
                case '21': array.push(13); break;
                case '22': array.push(15); break;
                case '23': array.push(14); break;

                case '30': array.push(8); break;
                case '31': array.push(9); break;
                case '32': array.push(11); break;
                case '33': array.push(10); break;
            }
        }
        gridArray.push(array);
    }
    return gridArray;
}

function convertSingleToGrid(singles){
    gridArray = [];
    for (let i = 0; i < singles.length; i++){
        element = singles[i].join('');
        switch(element){
            case '00': gridArray.push(0); break;
            case '01': gridArray.push(1); break;
            case '02': gridArray.push(3); break;
            case '03': gridArray.push(2); break;

            case '10': gridArray.push(4); break;
            case '11': gridArray.push(5); break;
            case '12': gridArray.push(7); break;
            case '13': gridArray.push(6); break;

            case '20': gridArray.push(12); break;
            case '21': gridArray.push(13); break;
            case '22': gridArray.push(15); break;
            case '23': gridArray.push(14); break;

            case '30': gridArray.push(8); break;
            case '31': gridArray.push(9); break;
            case '32': gridArray.push(11); break;
            case '33': gridArray.push(10); break;
        }
    }
    return gridArray;
}

function findSingleElements(array){
    var singleArray = [];
    for (let i = 0; i < 4; i++){
        if (i==0 && array[0][i]==1 && (array[1][0]==0 && array[0][3]==0 && array[0][i+1]==0 && array[3][0]==0))
            singleArray.push([0,i]);
        if (i>0 && i<3 && array[0][i]==1 && (array[3][i]==0 && array[0][i+1]==0 && array[1][i]==0 && array[0][i-1]==0))
            singleArray.push([0,i]);
        if (i==3 && array[0][i]==1 && (array[1][i]==0 && array[0][0]==0 && array[3][i]==0 && array[0][i-1]==0) )
            singleArray.push([0,i]);
    }

    for (let i = 1; i < 3; i++){
        for (let j = 0; j < 4; j++){
            if (j==0 && array[i][j]==1 && (array[i][j+1]==0 && array[i-1][j]==0 && array[i+1][j]==0 && array[i][3]==0))
                singleArray.push([i,j]);
            if (j>0 && j<3 && array[i][j]==1 && (array[i][j+1]==0 && array[i][j-1]==0 && array[i+1][j]==0 && array[i-1][j]==0))
                singleArray.push([i,j]);
            if (j==3 && array[i][j]==1 && (array[i][0]==0 && array[i][j-1]==0 && array[i-1][j]==0 && array[i+1][j]==0))
                singleArray.push([i,j]);
        }
    }

    for (let i = 0; i < 4; i++){
        if (i==0 && array[3][i]==1 && (array[2][0]==0 && array[3][3]==0 && array[3][i+1]==0 && array[0][0]==0))
            singleArray.push([3,i]);
        if (i>0 && i<3 && array[3][i]==1 && (array[0][i]==0 && array[3][i+1]==0 && array[2][i]==0 && array[3][i-1]==0))
            singleArray.push([3,i]);
        if (i==3 && array[3][i]==1 && (array[2][i]==0 && array[3][0]==0 && array[0][i]==0 && array[3][i-1]==0) )
            singleArray.push([3,i]);
    }
    return singleArray;
}

function removeExistingQuads(quads,octets){
    var newQuads = [];
    for (let quad of quads){
        quad.sort();
        let check = true;
        for (let octet of octets){
            octet.sort();
            if (octet.includes(quad[0]) && octet.includes(quad[1]) && octet.includes(quad[2]) && octet.includes(quad[3]))
                check = false;
                continue;
        }
        if (check)
            newQuads.push(quad);
    }
    return newQuads;
}

function removeExistingPairs(pairs,quads,octets){
    var newPairs = [];
    var afterOctets = []
    for (let pair of pairs){
        pair.sort();
        let check = true;
        for (let octet of octets){
            octet.sort();
            if (octet.includes(pair[0]) && octet.includes(pair[1]))
                check = false;
                continue;
        }
        if (check)
            afterOctets.push(pair);
    }

    for (let pair of afterOctets){
        pair.sort();
        let check = true;
        for (let quad of quads){
            quad.sort();
            if (quad.includes(pair[0]) && quad.includes(pair[1]))
                check = false;
                continue;
        }
        if (check)
            newPairs.push(pair);
    }    
    return newPairs;
}

function removeRedundantQuads(quads){
    var array = [];
    for (let quad of quads){
        array.push(quad[0]);
        array.push(quad[1]);
        array.push(quad[2]);
        array.push(quad[3]);
    }
    quads = [];
    for (let j = 0; j < array.length; j+=4){
        let counter = 0;
        for (let k = 0; k < array.length; k++){
            if (k!=j && k!=j+1 && k!=j+2 && k!=j+3){
                if (array[j]==array[k])
                    counter+=1;
                if (array[j+1]==array[k])
                    counter+=1;
                if (array[j+2]==array[k])
                    counter+=1;
                if(array[j+3]==array[k])
                    counter+=1;
                else    
                    continue;
            }
        }
        if (counter == 4)
            array.splice(j,4);
    }

    for (let m = 0; m < array.length; m+=4){
        quads.push([array[m],array[m+1],array[m+2],array[m+3]]);
    }
    return quads;
}

function solve4Var(booleanExpression){
    var m = generate4VarArray(booleanExpression);
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
        for (let i  = 0; i < 4; i++){
            for (let j = 0; j < 4; j++){
                if (m[i][j] == 1)
                    counter = counter + 1;
            }
        }
        if (counter == 16){
            finalAnswer = '1';
            foundAnswer = true;
        }
    }

    if (!foundAnswer){
        let counter = 0;
        for (let i  = 0; i < 4; i++){
            for (let j = 0; j < 4; j++){
                if (m[i][j] == 0)
                    counter = counter + 1;
            }
        }
        if (counter == 16){
            finalAnswer = '0';
            foundAnswer = true;
        }
    }

    if (!foundAnswer){
        
    }

    if (foundAnswer)
        var finalExpression = finalAnswer;
    return finalExpression ;
}

e = "A'B'C'D'+A'B'C'D+A'B'CD'+A'B'CD+A'BC'D'+A'BC'D+A'BCD'+A'BCD+AB'C'D'+AB'C'D+AB'CD'+AB'CD+ABC'D'+ABC'D+ABCD'+ABCD";
console.log(solve4Var(e));