import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header container">
        <div className="header-wrapper">
          <div className="header-img">
            <img
              className="header-img--school"
              src="/img/scool-img.jpg"
              width={350}
              height={350}
              alt="Фотография школы"
            />
          </div>
          <div className="header-img">
            <img
              className="header-img--logo"
              src="/img/header-img.png"
              width={227}
              height={350}
              alt="Фотография школы"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
