function KMapTable(props)
{
    const table = [];
    for(let row of props.table){
        let columns = row.map(col => <td className="cell">{col}</td>)
        table.push(<tr>{columns}</tr>);
    }
    return <table>{table}</table>;
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
    console.log(constantCount);
    let tableArray;
    if (constantCount == 3)
        tableArray = generate3VarArray(booleanExpression);
    else if (constantCount == 4)
        tableArray = generate4VarArray(booleanExpression);
    else 
        tableArray = generate5VarArray(booleanExpression);
    ReactDOM.render(<KMapTable table={tableArray}/>, document.getElementById("generateKmap"));
}