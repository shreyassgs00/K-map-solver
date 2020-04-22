function getArray(booleanExpression) 
{
    var tableArray = [];
    var minterms = booleanExpression.split("+");
    var constantCount = 0;
    
    var minterm = minterms[0].split('');
        for (let i = 0; i < minterm.length; i++)
        {
            if (minterm[i] == "'")
                continue;
            else
            {
                constantCount = constantCount + 1;
            }
        }

    if (constantCount == 3)
        tableArray = generate3VarArray(booleanExpression);
    else if (constantCount == 4)
        tableArray = generate4VarArray(booleanExpression);
    else 
        tableArray = generate5VarArray(booleanExpression);
    
    
    return tableArray;

}
  
