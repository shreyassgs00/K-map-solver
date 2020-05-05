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
    if (mintermsArray[0][0]==1 && mintermsArray[0][3]==1 && mintermsArray[3][0]==1 && mintermsArray[3][3]==1)
        quadArray.push([[0,3],[0,0],[3,0],[3,3]]);
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
    for (let i = 0; i < 3; i++){
        if (mintermsArray[3][i]==1 && mintermsArray[3][i+1]==1)
            pairArray.push([[3,i],[3,i+1]]);
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
        for (let array of gridArray){
            array = array.sort((x,y)=>x-y);
        }
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

function removeRedundantPairs(pairs){ //Function to check redundancy of pairs
    var array = [];
    for (let i = 0; i < pairs.length; i++){
        array.push(pairs[i][0]);
        array.push(pairs[i][1]);
    }
    pairs = [];

    for (let j = 0; j < array.length; j+=2){
        let counter = 0;
        for (let k = 0; k < array.length; k++){
            if (k!=j && k!=j+1){
                if (array[j] == array[k])
                    counter = counter + 1;
                if (array[j+1] == array[k])
                    counter = counter+1;
                else
                    continue;
            }
        }
        if (counter == 2)
            array.splice(j,2);
    }

    for (let m = 0; m < array.length; m+=2){
        pairs.push([array[m],array[m+1]]);
    }
    return pairs;
}

function generatePair4Expression(pairs){
    var array = [];
    var expression = '';
    for (let pair of pairs){
        element = pair.join('');
        switch(element){
            case '01': array.push("A'B'C'"); break;
            case '02': array.push("A'B'D'"); break;
            case '04': array.push("A'C'D'"); break;
            case '08': array.push("B'C'D'"); break;
            case '13': array.push("A'B'D"); break;
            case '15': array.push("A'C'D"); break;
            case '19': array.push("B'C'D"); break;
            case '23': array.push("A'B'C"); break;
            case '37': array.push("A'CD"); break;
            case '311': array.push("B'CD"); break;
            case '26': array.push("A'CD'"); break;
            case '210': array.push("B'CD'"); break;
            case '45': array.push("A'BC'"); break;
            case '46': array.push("A'BD'"); break;
            case '412': array.push("BC'D'"); break;
            case '57': array.push("A'BD"); break;
            case '513': array.push("BC'D"); break;
            case '67': array.push("A'BC"); break;
            case '715': array.push("BCD"); break;
            case '614': array.push("BCD'"); break;
            case '1213': array.push("ABC'"); break;
            case '1214': array.push("ABD'"); break;
            case '812': array.push("AC'D'"); break;
            case '1315': array.push("ABD"); break;
            case '913': array.push("AC'D"); break;
            case '1115': array.push("ACD"); break;
            case '1415': array.push("ABC"); break;
            case '1014': array.push("ACD'"); break;
            case '810': array.push("AB'D'"); break;
            case '89': array.push("AB'C'"); break;
            case '911': array.push("AB'D"); break;
            case '1011': array.push("AB'C"); break;
        }
    }
    expression = array.join("+");
    return expression;
}

function generateQuad4Expression(quads){
    var array = [];
    var expression = '';
    for (let quad of quads){
        element = quad.join('');
        switch(element){
            case '0145': array.push("A'C'"); break;
            case '0246': array.push("A'D'"); break;
            case '0189': array.push("B'C'"); break;
            case '02810': array.push("B'D'"); break;
            case '1357': array.push("A'D"); break;
            case '13911': array.push("B'D"); break;
            case '2367': array.push("A'C"); break;
            case '231011': array.push("B'C"); break;
            case '451213': array.push("BC'"); break;
            case '461214': array.push("BD'"); break;
            case '571315': array.push("BD"); break;
            case '671415': array.push("BC"); break;
            case '8101214': array.push("AD'"); break;
            case '891213': array.push("AC'"); break;
            case '9111315': array.push("AD"); break;
            case '10111415': array.push("AC"); break;
            case '0123': array.push("A'B"); break;
            case '04812': array.push("C'D'"); break;
            case '4567': array.push("A'B"); break;
            case '15913': array.push("C'D"); break;
            case '12131415': array.push("AB"); break;
            case '371115': array.push("CD"); break;
            case '891011': array.push("AB'"); break;
            case '261014':array.push("CD'"); break;
        }
    }
    expression = array.join("+");
    return expression;
}

function generateOctet4Expression(octets){
    var array = [];
    var expression = '';
    for (let octet of octets){
        element = octet.join('');
        switch(element){
            case '01234567': array.push("A'"); break;
            case '89101112131415': array.push("A"); break;
            case '0145891213':array.push("C'"); break;
            case '135710111315': array.push("D"); break;
            case '236710111415': array.push("C"); break;
            case '02468101214': array.push("D'"); break;
            case '456712131415': array.push("B"); break;
            case '0123891011': array.push("B'"); break;
        }
    }
    expression = array.join("+");
    return expression;
}

function generateSingle4Expression(singleElements){
    var array = [];
    var expression = '';
    for (let i = 0; i < singleElements.length; i++){
        element = singleElements[i];
        switch(element){
            case 0: array.push("A'B'C'D'");break;
            case 1: array.push("A'B'C'D"); break;
            case 2: array.push("A'B'CD'"); break;
            case 3: array.push("A'B'CD"); break;
            case 4: array.push("A'BC'D'"); break;
            case 5: array.push("A'BC'D"); break;
            case 6: array.push("A'BCD'"); break;
            case 7: array.push("A'BCD"); break;
            case 8: array.push("AB'C'D'"); break;
            case 9: array.push("AB'C'D"); break;
            case 10: array.push("AB'CD'"); break;
            case 11: array.push("AB'CD"); break;
            case 12: array.push("ABC'D'"); break;
            case 13: array.push("ABC'D"); break;
            case 14: array.push("ABCD'"); break;
            case 15: array.push("ABCD"); break;
        }
    }
    expression = array.join('+');
    return expression;
}

function solve4Var(booleanExpression){
    var m = generate4VarArray(booleanExpression);
    var inputExpression = booleanExpression;
    var minterms = booleanExpression.split("+");
    let finalAnswer = '';
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
        o = findOctets(m);
        octets = convertMultiToGrid(o);
        if (octets.length>0){
            finalAnswer = finalAnswer+'+'+generateOctet4Expression(octets);
            q = findQuads(m);
            quads = convertMultiToGrid(q);
            quads = removeExistingQuads(quads,octets);
            quads = removeRedundantQuads(quads);
            if (quads.length>0){
                finalAnswer = finalAnswer+'+'+generateQuad4Expression(quads);
                p = findPairs(m);
                pairs = convertMultiToGrid(p);
                pairs = removeExistingPairs(pairs,quads,octets);
                pairs = removeRedundantPairs(pairs);
                if (pairs.length>0){
                    finalAnswer = finalAnswer+'+'+generatePair4Expression(pairs);
                    s = findSingleElements(m);
                    singles = convertSingleToGrid(s);
                    if (singles.length>0)
                        finalAnswer = finalAnswer+'+'+generateSingle4Expression(singles);
                }
                else{
                    s = findSingleElements(m);
                    singles = convertSingleToGrid(s);
                    if (singles.length>0)
                        finalAnswer = finalAnswer+'+'+generateSingle4Expression(singles);
                }
            }
            else{
                p = findPairs(m);
                pairs = convertMultiToGrid(p);
                pairs = removeExistingPairs(pairs,quads,octets);
                pairs = removeRedundantPairs(pairs);
                if (pairs.length>0){
                    finalAnswer = generatePair4Expression(pairs);
                    s = findSingleElements(m);
                    singles = convertSingleToGrid(s);
                    if (singles.length>0)
                        finalAnswer = finalAnswer+'+'+generateSingle4Expression(singles);
                }
                else{
                    s = findSingleElements(m);
                    singles = convertSingleToGrid(s);
                    if (singles.length>0)
                        finalAnswer = finalAnswer+'+'+generateSingle4Expression(singles);
                }
            }
        }
        else{
            q = findQuads(m);
            quads = convertMultiToGrid(q);
            quads = removeRedundantQuads(quads);
            if (quads.length>0){
                finalAnswer = finalAnswer+'+'+generateQuad4Expression(quads);
                p = findPairs(m);
                pairs = convertMultiToGrid(p);
                pairs = removeExistingPairs(pairs,quads,octets);
                pairs = removeRedundantPairs(pairs);
                if (pairs.length>0){
                    finalAnswer = finalAnswer+'+'+generatePair4Expression(pairs);
                    s = findSingleElements(m);
                    singles = convertSingleToGrid(s);
                    if (singles.length>0)
                        finalAnswer = finalAnswer+'+'+generateSingle4Expression(singles);
                }
                else{
                    s = findSingleElements(m);
                    singles = convertSingleToGrid(s);
                    if (singles.length>0)
                        finalAnswer = finalAnswer+'+'+generateSingle4Expression(singles);
                }
            }
            else{
                p = findPairs(m);
                pairs = convertMultiToGrid(p);
                pairs = removeExistingPairs(pairs,quads,octets);
                pairs = removeRedundantPairs(pairs);
                if (pairs.length>0){
                    finalAnswer = generatePair4Expression(pairs);
                    s = findSingleElements(m);
                    singles = convertSingleToGrid(s);
                    if (singles.length>0)
                        finalAnswer = finalAnswer+'+'+generateSingle4Expression(singles);
                }
                else{
                    s = findSingleElements(m);
                    singles = convertSingleToGrid(s);
                    if (singles.length>0)
                        finalAnswer = finalAnswer+'+'+generateSingle4Expression(singles);
                }
            }
        }
        foundAnswer = true; 
    }

    finalAnswer = finalAnswer.split('');
    if (finalAnswer[0]=='+')
        finalAnswer.splice(0,1);

    if (foundAnswer)
        var finalExpression = finalAnswer.join('');
    return finalExpression ;
}

function gateCount4(booleanExpression){
    expression = solve4Var(booleanExpression);
    expressionArray = expression.split("+");
    var orGateInputCount = expressionArray.length;
    var andGateCount = expressionArray.length;

    if (orGateInputCount>0)
        return "The final expression can be implemented using "+andGateCount+" AND gate(s) connected to a "+ orGateInputCount + " input OR gate";
    else
        return "The final expression can be implemented using "+andGateCount+" AND gate(s)"
}