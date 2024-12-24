const footerStyle = {
  padding: "20px",
};

const paraStyle = {
  textAlign: "center",
};

const btnStyle = {
  backgroundColor: "yellow",
  padding: "0.5rem",
  borderRadius: "10px",
  border: "none",
  fontSize: "20px",
};

const btnDivStyle = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  padding: "0.5rem",
};

function Footer() {
  return (
    <div style={footerStyle}>
      <p style={paraStyle}>
        We&apos;re Open Until 20:00 Come Visit Us Or Order Online
      </p>
      <div style={btnDivStyle}>
        <button style={btnStyle}>Order now</button>
      </div>
    </div>
  );
}

export default Footer;
