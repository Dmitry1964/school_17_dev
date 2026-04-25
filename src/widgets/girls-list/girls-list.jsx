import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-creative';
import { FreeMode, Pagination, EffectCreative } from 'swiper/modules';
import { girlsData } from '../../shared/data/girls-data';
import './girls-list.css';
import { useWindowWidth } from '../../shared/hooks/useWindowWidth';

const GirlsList = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 480;
  const isTablet = windowWidth >= 480;
  return (
    <section className="girls-list">
      <h2 className="girls-list--title">Это наши девушки</h2>
      <div className="girls-list--wrapper container">
        {isMobile && (
          <Swiper
            slidesPerView={1}
            modules={[Pagination, EffectCreative]}
            pagination={{ clickable: true }}
            loop={true}
            speed={0.3}
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
            // slidesPerView={3}
            // spaceBetween={25}
            modules={[Pagination, FreeMode]}
            pagination={{ clickable: true }}
            loop={true}
            freeMode={true}
            speed={0.3}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              720: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
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
    </section>
  );
};

export { GirlsList };
