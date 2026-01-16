function ListGroup() {
  let items = ["New York", "London", "Paris", "Tokyo"];
 

  //Conditional Rendering
  return (
    <div>
      <h1>List Group</h1>
     
      {items.length === 0 ? <p>No item Found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
