import './App.css';
import './styles/Main-page.css';
import './styles/font.css';
import PhotoCard from './widgets/photo-card/photo-card';
import Header from './widgets/header/header';
import MeetingList from './widgets/meeting-list/meeting-list';

const App = () => {
  return (
    <>
      <Header/>
      <main className="main-page">
        <div className="main-page--wrapper container">
          <h2 className="main-page--title">Последний звонок</h2>
          <div className="main-page--img">
            <img src="/img/last-bell.jpg" alt="Фотография Последний звонок" />
          </div>
          {/* <div>
            слайдер
            <PhotoCard
              imgPath={"/img/meeting/img1.jpg"}
              desc={"photo"}
            />
          </div> */}
          <MeetingList/>
        </div>
      </main>
    </>
  );
};

export default App;
