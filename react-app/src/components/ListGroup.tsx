
function ListGroup() {
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {cities.map((city) => (<li className="list-group-item">{city}</li>))}
            </ul>
        </>
    )
}
export default ListGroup;


// function ListGroup() {
//     return (
//         <>
//             <h1>List</h1>
//             <ul className="list-group">
//                 <li className="list-group-item">An item</li>
//                 <li className="list-group-item">A second item</li>
//                 <li className="list-group-item">A third item</li>
//                 <li className="list-group-item">A fourth item</li>
//                 <li className="list-group-item">And a fifth one</li>
//             </ul>
//         </>
//     )
// }
// export default ListGroup;