import Pizza from "./pizza";
import data from "../data/data.js";

const menuStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justidyContent: "center",
};

const pizzaStyle = {
  display: "grid",
  gridTemplateColumns: "420px 420px",
  gridTemplateRows: "150px 150px ",
};

const ourMenuStyle = {
  borderTop: "2px solid black",
  borderBottom: "2px solid black",
  padding: "2px",
  marginBottom: "5px",
  marginTop: "5px",
};

function Menu() {
  return (
    <div style={menuStyle}>
      <h2 style={ourMenuStyle}>Our Menu</h2>
      <p>
        Authentic Italian Cuisine. 6 creative dishes to choose from . All from
        stone oven, all organic, all delicious.
      </p>
      <div style={pizzaStyle}>
        {data.map(function (pizzaData) {
          return <Pizza pizzaData={pizzaData} key={pizzaData.name} />;
        })}
        ;
      </div>
    </div>
  );
}

export default Menu;
