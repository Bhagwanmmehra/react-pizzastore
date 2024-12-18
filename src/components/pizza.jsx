

  const cardStyle = {
    display: "flex",
    gap: "1rem",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    padding: "1rem",
};

const imgStyle = {
    height: "9rem",
};

const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
};

function Pizza() {
    return (
        <div style={cardStyle}>
            <div>
                <img
                    style={imgStyle}
                    src="./pizzas/focaccia.jpg"
                    alt="pizza01"
                />
            </div>
            <div style={detailsStyle}>
                <p>PizzaName</p>
                <p>ing01, ing02, ing03</p>
                <p style={{ marginTop: "auto" }}>0</p>
            </div>
        </div>
    );
}

export default Pizza;