import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header container">
        <div className="header-wrapper">
          <div className="header-school">
            <picture>
              <source type="image/webp" srcSet="/img/school-img.webp, /img/school-img@2x.webp 2x"/>
              <img  className="header-school--img" src="/img/school-img.jpg" srcSet="/img/school-img@2x.jpg 2x" width={350} height={350} alt="Фотография школы" />
            </picture>
          </div>
          <div className="header-logo">
            <img
              className="header-logo--img"
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
