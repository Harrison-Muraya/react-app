
function ListGroup() {
    let cities = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"]

    cities = []

    if(cities.length===0){
        return(
            <>
            <h1>List</h1>
            <p>No city found</p>
            </>
        )
    }

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {cities.map((city) => (<li key={city} className="list-group-item">{city}</li>))}
            </ul>
        </>
    )
}
export default ListGroup;


// function ListGroup() {
//     const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];

//     return (
//         <>
//             <h1>List</h1>
//             <ul className="list-group">
//                 {cities.map((city) => (<li key={city} className="list-group-item">{city}</li>))}
//             </ul>
//         </>
//     )
// }
// export default ListGroup;


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