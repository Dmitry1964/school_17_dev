import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-creative';
import {
  FreeMode,
  Pagination,
  EffectCreative,
  Navigation,
} from 'swiper/modules';
import { friendsData } from '../../shared/data/friends-data';
import './friends-list.css';
import { useWindowWidth } from '../../shared/hooks/useWindowWidth';
import { useState } from 'react';
import { Modal } from '../../features/modal/modal';

const FriendsList = () => {
  const [modalImg, setModalImg] = useState({
    imgSrc: '',
    imgWebp: '',
    imgAlt: '',
    isOpen: false,
  });

  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 480;
  const isTablet = windowWidth >= 480;

  const handleSlideImage = (evt) => {
    const id = evt.currentTarget.id;
    const findImg = friendsData.find((item) => item.id === id);
    const srcImg = findImg.path;
    const srcWebp = findImg.pathWebp;
    const altImg = findImg.alt;
    setModalImg({ ...modalImg, imgSrc: srcImg, imgWebp: srcWebp, imgAlt: altImg, isOpen: true });
  };
  const handleCloseModal = () => {
    setModalImg({ ...modalImg, isOpen: false });
  }
  return (
    <section className="friends-list">
      <h2 className="friends-list--title">Школьные годы</h2>
      <div className="friends-list--wrapper container">
        <div className='friends-list--class'>
          <img src="/img/friends/school01.jpg" width={600} height={750} alt="Фото последний звонок" />

        </div>
        <div className='friends-list--teachers'>
          <img src="/img/friends/school02.jpg" width={600} height={544} alt="Фото учителя" />
        </div>
        {isMobile && (
          <Swiper
            slidesPerView={1}
            modules={[Pagination, EffectCreative]}
            pagination={{ dynamicBullets: true }}
            loop={true}
            effect="creative"
                        creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -500],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}

          >
            {friendsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="friends-list--slide">
                  <picture>
                    <source type="image/webp" srcSet={item.pathWebp} />
                    <img
                      onClick={(e) => handleSlideImage(e)}
                      id={item.id}
                      src={item.path}
                      width={item.width}
                      height={item.height}
                      alt={item.alt}
                    />
                  </picture>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {isTablet && (
          <Swiper
            slidesPerView={2.5}
            centeredSlides={true}
            spaceBetween={15}
            modules={[Pagination, FreeMode, Navigation]}
            pagination={{ clickable: true }}
            loop={true}
            freeMode={true}
            navigation={true}
          >
            {friendsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="friends-list--slide">
                  <picture>
                    <source type="image/webp" srcSet={item.pathWebp} />
                    <img
                      src={item.path}
                      width={item.width}
                      height={item.height}
                      alt={item.alt}
                    />
                  </picture>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      {modalImg.isOpen &&
       <Modal imgSrc={modalImg.imgSrc} imgWebp={modalImg.imgWebp} imgAlt={modalImg.imgAlt} closeModal={handleCloseModal} />}
    </section>
  );
};

export { FriendsList };
