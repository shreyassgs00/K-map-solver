function KMapTable(props)
{
    const table = [];
    for(let row of props.table){
        let columns = row.map(col => <td className="cell">{col}</td>)
        table.push(<tr>{columns}</tr>);
    }
    return (<div>
            <h2> K-map </h2>
            <table>{table}</table>
            </div>);
}

function generateTable(booleanExpression) 
{   
    let minterms = booleanExpression.split("+");    
    let minterm = minterms[0].split('');
    let constantCount = 0;
    for (let i = 0; i < minterm.length; i++)
    {
        if (minterm[i] !== "'")
            constantCount = constantCount + 1;            
    }

    let tableArray;
    if (constantCount == 3)
        tableArray = generate3VarArray(booleanExpression);
    else if (constantCount == 4)
        tableArray = generate4VarArray(booleanExpression);
    else 
        tableArray = generate5VarArray(booleanExpression);
    
    let finalAnswer = '';
    if (constantCount == 3)
        finalAnswer = solve3Var(booleanExpression);
    else if (constantCount == 4)
        finalAnswer = solve4Var(booleanExpression);
    else
        finalAnswer = solve5Var(booleanExpression);

    ReactDOM.render(<KMapTable table={tableArray}/>, document.getElementById("generateKmap"));
    ReactDOM.render(<DisplayAnswer finalExpression={finalAnswer}/>, document.getElementById("displayAnswer"));
}

function DisplayAnswer(props){
    let finalExpression = '';
    return <h1> The final expression is {props.finalExpression} </h1>;
}