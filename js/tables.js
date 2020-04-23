var tableArray = [];
var constantCount = 0;
function getArray(booleanExpression) 
{
   
    var minterms = booleanExpression.split("+");
    
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

function GenerateTable()
{
    var table = '';

    if (constantCount == 3)
    {
        row1 = tableArray[0].map(
            (element)=> 
            <th> {element} </th>
        );

        row2 = tableArray[1].map(
            (element)=> 
            <th> {element} </th>
        );

        table = (
            <table>
                <tr> row1 </tr>
                <tr> row2 </tr>
            </table>
        );
    }

    if (constantCount == 4 || constantCount == 5)
    {
        row1 = tableArray[0].map(
            (element)=> 
            <th> {element} </th>
        );

        row2 = tableArray[1].map(
            (element)=> 
            <th> {element} </th>
        );

        row3 = tableArray[2].map(
            (element)=> 
            <th> {element} </th>
        );

        row4 = tableArray[3].map(
            (element)=> 
            <th> {element} </th>
        );

        table = (
            <table>
                <tr> row1 </tr>
                <tr> row2 </tr>
                <tr> row3 </tr>
                <tr> row4 </tr>
            </table>
        );

    }

    return table;

}

ReactDOM.render(<GenerateTable />, document.getElementById("generateKmap"));




  
