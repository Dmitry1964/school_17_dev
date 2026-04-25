import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { girlsData } from '../../shared/data/girls-data';
import './girls-list.css';

const GirlsList = () => {
  return (
    <section className="girls-list">
      <div className="girls-list--wrapper container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={true}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              navigation: false,
              centeredSlides: true,
            },
            550: {
              slidesPerView: 2,
              navigation: false,
              centeredSlides: true,
              spaceBetween: 30,
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
                    width={250}
                    height={333}
                    alt={item.alt}
                  />
                </picture>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export { GirlsList };
