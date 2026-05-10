import "./footer.css";

const Footer = () => {
  return <footer className="footer">
    <div className="container">
      <div className="footer-wrapper">
        <img src="/img/footer-img.png" width={50} height={50} alt="Родина мать" />
        <p className="footer-title">Волгоград 2026 г</p>
      </div>
    </div>
  </footer>;
};

export {Footer};
