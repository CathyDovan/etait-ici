import React from "react";
import Name from "./Name";
import "./List.css";

const data = [
  { name: "CDS-SNC", date: "12.02.2019", plural: true },
  { name: "L'équipe de la Plateforme", date: "12.02.2019", plural: true }
];

const listItems = data.map((row, index) => (
  <li key={index}>
    <Name name={row.name} date={row.date} plural={row.plural} />
  </li>
));

class List extends React.Component {
  render() {
    return (
      <div className="ListHold">
        <ul className="List" data-testid="List">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default List;
