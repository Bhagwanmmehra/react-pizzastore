import Pizza from "./pizza"

function Menu() {
    return (
      <div>
           <h2>Our Menu</h2>
        <p>
          Authentic Italian Cuisine. 6 creative dishes to choose from . All from stone oven, all organic, all delicious.
        </p>
        <div>
  
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        </div>
       
      </div>
    );
  }

  
  export default Menu;
