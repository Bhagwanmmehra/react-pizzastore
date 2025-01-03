import "./global.css";

import Header from "./components/header";
import Menu from "./components/menu";
import Footer from "./components/footer";

const appStyle = {
  display: "flex",
  flexDirection: "column",
};

function App() {
  // 1. Header
  // 2. Menu
  //    2.a. PizzaCard
  // 3. Footer
  return (
    <div style={appStyle}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
