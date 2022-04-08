export default function TableCoordinates (props) {
    
    let data = props.data.map(
        (pin) => 
        <tr key={pin.toString()}>
            <td>{pin.options.title}</td>
            <td>{pin.center.latitude}</td>
            <td>{pin.center.longitude}</td>
        </tr>
    );
    
    return(
        <table className="table-info mt-3">
            <thead>
                <tr>
                    <th scope="col">Label</th>
                    <th scope="col">Latitude</th>
                    <th scope="col">Longitude</th>
                </tr>
            </thead>
            <tbody>
               {data}
            </tbody>
        </table>
    );
}