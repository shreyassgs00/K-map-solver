function generate3VarArray(booleanExpression) //Generating a suitable array according to the input expression helping in generating of the K-map table.
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

function compare(array,index,a,b){
    return (array[index][0] == a && array[index][1] == b);
}

function findSingleElements(array){ //Function to find elements which cannot be paired.
    var singleElementArray = [];

    for (let i = 0; i < 4; i++){
        if (i==0 && array[0]==1 && (array[3]==0 && array[4]==0 && array[1]==0))
            singleElementArray.push(0);
        if (i>0 && i<3 && array[i]==1 && array[i+1]==0 && array[i+4]==0 && array[i-1]==0)
            singleElementArray.push(i);
        if (i==3  && array[3]==1 && (array[2]==0 && array[7]==0 && array[0]==0))
            singleElementArray.push(3);
        else
            continue;
    }

    for (let j = 4; j < 8; j++){
        if (j==4 && array[4]==1 && (array[7]==0 && array[0]==0 && array[5]==0))
            singleElementArray.push(4);
        if (j>4 && j<7 && array[j]==1 && array[j+1]==0 && array[j-4]==0 && array[j-1]==0)
            singleElementArray.push(j);
        if (j==7  && array[7]==1 && (array[6]==0 && array[3]==0 && array[4]==0))
            singleElementArray.push(7);
        else
            continue;
    }
    return singleElementArray;
}

function make2Pair(array){ //Function to create an array containing the index of the elements which can be paired together
    pair2Array = [];
    if (array[0] == 1 && array [3] == 1)
        pair2Array.push([0,3]);

    if (array[4] == 1 && array [7] == 1)
        pair2Array.push([4,7]);

    for (let i = 0; i < 4; i++){
        if (array[i] == 1 && array[i+4]==1)
            pair2Array.push([i,i+4]);
        if (array[i]==1 && array[i+1]==1)
            pair2Array.push([i,i+1]);
        else
            continue;
        }

    for ( let j = 4; j < 8; j++){
        if (array[j]==1 && array[j+1]==1)
            pair2Array.push([j,j+1]);
        else
            continue;
    }

    for (let k = 0; k < pair2Array.length; k++){
        if (compare(pair2Array,k,3,4))
            pair2Array.splice(k,1);
    }
    pair2Array.sort();
    return pair2Array;
}

function make4Pair(array){ //Function to create an array containing the index of the elements which can be paired as quads
    var pair4Array = [];
    array.sort();
    var counterIfVar = true;

    if(counterIfVar){
        let counter = 0;
        for (let j = 0; j < array.length; j++){
            if(compare(array,j,0,3))
                counter += 1;
            if(compare(array,j,4,7))
                counter += 1;
            else
                continue;
        }
        if (counter == 2)
                pair4Array.push([0,3,4,7]);
    }
    
    if(counterIfVar){
        let counter = 0;
        for (let k = 0; k < array.length; k++){
            if(compare(array,k,0,4))
                counter += 1;
            if(compare(array,k,1,5))
                counter += 1;
            else
                continue;
        }
        if (counter == 2)
                pair4Array.push([0,4,1,5]);
    }

    if(counterIfVar){
        let counter = 0;
        for (let q = 0; q < array.length; q++){
            if(compare(array,q,0,1))
                counter += 1;
            if(compare(array,q,4,5))
                counter += 1;
            else
                continue;
        }
        if (counter == 2)
                pair4Array.push([0,1,4,5]);
    }

    if(counterIfVar){
        let counter = 0;
        for (let l = 0; l < array.length; l++){
            if(compare(array,l,1,5))
                counter += 1;
            if(compare(array,l,2,6))
                counter += 1;
            else
                continue;
        }
        if (counter == 2)
                pair4Array.push([1,5,2,6]);
    }

    if(counterIfVar){
        let counter = 0;
        for (let r = 0; r < array.length; r++){
            if(compare(array,r,1,2))
                counter += 1;
            if(compare(array,r,5,6))
                counter += 1;
            else
                continue;
        }
        if (counter == 2)
                pair4Array.push([1,2,5,6]);
    }

    if(counterIfVar){
        let counter = 0;
        for (let m = 0; m < array.length; m++){
            if(compare(array,m,2,6))
                counter += 1;
            if(compare(array,m,3,7))
                counter += 1;
            else
                continue;
        }
        if (counter == 2)
                pair4Array.push([2,6,3,7]);
    }

    if(counterIfVar){
        let counter = 0;
        for (let s = 0; s < array.length; s++){
            if(compare(array,s,2,3))
                counter += 1;
            if(compare(array,s,6,7))
                counter += 1;
            else
                continue;
        }
        if (counter == 2)
                pair4Array.push([2,3,6,7]);
    }

    if(counterIfVar){
        let counter = 0;
        for (let n = 0; n < array.length; n++){
            if(compare(array,n,0,1))
                counter += 1;
            if(compare(array,n,2,3))
                counter += 1;
            else
                continue;
        }
        if (counter == 2)
                pair4Array.push([0,1,2,3]);
    }

    if(counterIfVar){
        let counter = 0;
        for (let p = 0; p < array.length; p++){
            if(compare(array,p,4,5))
                counter += 1;
            if(compare(array,p,6,7))
                counter += 1;
            else
                continue;
        }
        if (counter == 2)
                pair4Array.push([4,5,6,7]);
    }
    return pair4Array;
}

function splice2Array(array2,array4){ //Function to remove pairs from the pair array which were used to form quads
    var newarray2 = [];
    for (let i = 0; i < array2.length; i++){
        var pair = array2[i];
        let check = true;
        for (quad of array4){
            if (quad.includes(pair[0]) && quad.includes(pair[1])){
                check = false;
                continue;
            }
        }
        if (check)
            newarray2.push(pair);
    }
    return newarray2;
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

function removeRepeatQuads(quads){ // Function to remove repeated quads
    for (let quad of quads){
        quad.sort();
    }

    for (let i = 0; i < quads.length-1; i++){
        quads.splice(i+1,1);
    }
    return quads;
}

function generateSingleExpression(array){
    var expression = '';
    var expressionArray = [];
    for (let i = 0; i < array.length; i++){
        var numberString = array[i];
        switch (numberString){
            case 0: expressionArray.push("A'B'C'"); break;
            case 1: expressionArray.push("A'B'C"); break;
            case 3: expressionArray.push("A'BC'"); break;
            case 2: expressionArray.push("A'BC"); break;
            case 4: expressionArray.push("AB'C'"); break;
            case 5: expressionArray.push("AB'C"); break;
            case 7: expressionArray.push("ABC'"); break;
            case 6: expressionArray.push("ABC"); break;
        }
    }
    if (expressionArray.length == 1)
        expression = expressionArray.toString();
    else
        expression = expressionArray.join('+');
    return expression;
}

function generatePairExpression(pairs){
    var expression = '';
    var expressionArray = [];
    for (let i = 0; i < pairs.length; i++){
        var numberString = pairs[i].join('');
        switch(numberString){
            case "01": expressionArray.push("A'B'"); break;
            case "12": expressionArray.push("A'C"); break;
            case "23": expressionArray.push("A'B"); break;
            case "03": expressionArray.push("A'C'"); break;
            case "45": expressionArray.push("AB'"); break;
            case "56": expressionArray.push("AC"); break;
            case "67": expressionArray.push("AB"); break;
            case "47": expressionArray.push("AC'"); break;
            case "04": expressionArray.push("B'C'"); break;
            case "15": expressionArray.push("B'C"); break;
            case "26": expressionArray.push("BC"); break;
            case "37": expressionArray.push("BC'"); break;
        }
    }
    expression = expressionArray.join('+');
    return expression;
}

function generateQuadExpression(quads){
    var expression = '';
    var expressionArray = [];
    for (let i = 0; i < quads.length; i++){
        var numberString = quads[i].join('');
        switch(numberString){
            case "0145": expressionArray.push("B'"); break;
            case "1256": expressionArray.push("C"); break;
            case "2367": expressionArray.push("B"); break;
            case "0347": expressionArray.push("C'"); break;
            case "0123": expressionArray.push("A'"); break;
            case "4567": expressionArray.push("A"); break;
        }
    }
    expression = expressionArray.join('+');
    return expression;
}

function generateMinterm3Array(booleanExpression){

    minterms = booleanExpression.split("+");
    mintermsArray = [];

    for (let i = 0; i < 8; i++){
        mintermsArray[i] = 0;
    }

    for (let minterm of minterms)
    {
        switch (minterm)
        {
            case "A'B'C'": mintermsArray[0]=1; break;
            case "A'B'C": mintermsArray[1]=1; break;
            case "A'BC'": mintermsArray[3]=1; break;
            case "A'BC": mintermsArray[2]=1; break;
            
            case "AB'C'": mintermsArray[4]=1; break;
            case "AB'C": mintermsArray[5]=1; break;
            case "ABC'": mintermsArray[7]=1; break;
            case "ABC": mintermsArray[6]=1; break;
        }
    }
    return mintermsArray;
}

function solve3Var(booleanExpression){
    var inputExpression = booleanExpression;
    var minterms = booleanExpression.split("+");
    var finalAnswer = '';
    var foundAnswer = false;
    var finalExpression = '';
    var m = generateMinterm3Array(booleanExpression);

    if (!foundAnswer){
        if (minterms.length == 1){
            finalAnswer = inputExpression;
            foundAnswer = true;
        }
    }

    if (!foundAnswer){
        let counter = 0;
        for (let i = 0; i < 8; i++){
            if (m[i] == 1)
                counter = counter + 1;
            else
                break;
        }
        if (counter == 8){
            finalAnswer = '1';
            foundAnswer = true;
        }
    }        
    
    if (!foundAnswer){
        let counter = 0;
        for (let i = 0; i < 8; i++){
            if (m[i] == 0)
                counter = counter + 1;
            else
                break;
        }
        if (counter == 8){
            finalAnswer = '0';
            foundAnswer = true;
        }
    }

    var singleElements = [];
    var pairs = [];
    var quads = [];

    if (!foundAnswer)
        singleElements = findSingleElements(m);

    if(!foundAnswer && minterms.length > 1){
        pairs = make2Pair(m);
        if (pairs.length > 1){
            quads = make4Pair(pairs);
            if (quads.length > 0){
                pairs = splice2Array(pairs,quads);
                pairs = removeRedundantPairs(pairs);
                quads = removeRepeatQuads(quads);
            }
            else 
                pairs = removeRedundantPairs(pairs);
        }
    }

    if(!foundAnswer){
        if (singleElements.length>0 && pairs.length==0 && quads.length==0){
            finalAnswer = generateSingleExpression(singleElements);
            foundAnswer = true;
        }
        else if (singleElements.length>0 && pairs.length>0 && quads.length==0){
            finalAnswer = generateSingleExpression(singleElements)+'+'+generatePairExpression(pairs);
            foundAnswer = true;
        }
        else if(singleElements.length>0 && pairs.length>0 && quads.length>0){
            finalAnswer = generateSingleExpression(singleElements)+'+'+generatePairExpression(pairs)+'+'+generateQuadExpression(quads);
            foundAnswer = true;
        }
        else if(singleElements.length>0 && pairs.length==0 && quads.length>0){
            finalAnswer = generateSingleExpression(singleElements)+'+'+generateQuadExpression(quads);
            foundAnswer = true;
        }
        else if(singleElements.length==0 && pairs.length>0 && quads.length>0){
            finalAnswer = generatePairExpression(pairs)+'+'+generateQuadExpression(quads);
            foundAnswer = true;
        }
        else if(singleElements.length==0 && pairs.length>0 && quads.length==0){
            finalAnswer = generatePairExpression(pairs);
            foundAnswer = true;
        }
        else{
            finalAnswer = generateQuadExpression(quads);
            foundAnswer = true;
        }
    }

    if (foundAnswer){
        finalExpression = finalAnswer;
    }

    return finalExpression;
}

function gateCount3(booleanExpression){
    expression = solve3Var(booleanExpression);
    expressionArray = expression.split("+");
    var orGateInputCount = expressionArray.length;
    var andGateCount = expressionArray.length;

    if (orGateInputCount>0)
        return "The final expression can be implemented using "+andGateCount+" AND gate(s) connected to a "+ orGateInputCount + " input OR gate";
    else
        return "The final expression can be implemented using "+andGateCount+" AND gate(s)"
}
