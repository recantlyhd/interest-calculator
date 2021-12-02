import './TableDesign.css';
function TableCreate(props) {
    return (
        <div>

            <table className={'styled-table'}>
                <thead>
                <tr>
                    <th>Jahre</th>
                    <th>Kapital</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(props.result).map((key) => {
                    return <tr>
                        <td>{key}</td>
                        <td>{props.result[key].toFixed(5)}</td>
                    </tr>;
                })}
                </tbody>
            </table>
        </div>
    );
}

export default TableCreate;