import { MouseEvent } from "react";

function ListGroup() {
  let item = ["Mysore", "Banglore", "Hydrabad", "Manglore"];

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List of Elements</h1>
      {item.length == 0 ? <p>item not Found</p> : null}
      <ul className="list-group">
        {/* <li className="list-group-item active" aria-current="true">An active item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
    <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li> */}

        {item.map((item, index) => (
          <li 
          className="list-group-item active" 
          key={item} 
          onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
