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
import { girlsData } from '../../shared/data/girls-data';
import './girls-list.css';
import { useWindowWidth } from '../../shared/hooks/useWindowWidth';
import { useState } from 'react';
import { Modal } from '../../features/modal/modal';

const GirlsList = () => {
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
    const findImg = girlsData.find((item) => item.id === id);
    const srcImg = findImg.path;
    const srcWebp = findImg.pathWebp;
    const altImg = findImg.alt;
    setModalImg({ ...modalImg, imgSrc: srcImg, imgWebp: srcWebp, imgAlt: altImg, isOpen: true });
  };
  const handleCloseModal = () => {
    setModalImg({ ...modalImg, isOpen: false });
  }
  return (
    <section className="girls-list">
      <h2 className="girls-list--title">Это наши девушки</h2>
      <div className="girls-list--wrapper container">
        {isMobile && (
          <Swiper
            slidesPerView={1}
            modules={[Pagination, EffectCreative]}
            pagination={{ dynamicBullets: true }}
            loop={true}
            effect="creative"
            creativeEffect={{
              prev: {
                // shadow: true,
                translate: [0, 0, -500],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
          >
            {girlsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="girls-list--slide">
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
            {girlsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="girls-list--slide">
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

export { GirlsList };
