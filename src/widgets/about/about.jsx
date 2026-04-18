import './about.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-wrapper container">
        <h2 className="about-title">
          Нам<br></br>17-летним<br></br>посвящается
        </h2>
        <div className="about-photos--one">
          <img
            id="image-one"
            src="/img/about/about-img4.png"
            width={200}
            height={200}
            alt="Фото Последний звонок"
          />
          <img
            id="image-two"
            src="/img/about/about-img2.png"
            width={200}
            height={200}
            alt="Фото Последний звонок"
          />
        </div>
        <div className="about-photos--two">
          <img
            id="image-three"
            src="/img/about/about-img1.png"
            width={200}
            height={130}
            alt="Фото Последний звонок"
          />
          <img
            id="image-four"
            src="/img/about/about-img3.png"
            width={200}
            height={200}
            alt="Фото Последний звонок"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
