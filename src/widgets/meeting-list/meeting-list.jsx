import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import './meeting-list.css';
import { Navigation, Pagination, EffectFlip } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PhotoCard from "../photo-card/photo-card";

const MeetingList = () => {
  return (
    <section className="meeting-list">
      <div className="meeting-list--wrapper">
        <h2>Встреча у Андрея на даче</h2>
        <Swiper
        modules={[Navigation, Pagination, EffectFlip]}
        navigation={true}
        pagination={true}

          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          autoHeight={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              navigation: false
            },

            650: {
              slidesPerView: 2
            }

          }}
        >
          <SwiperSlide>
            <PhotoCard
            imgPath={"/img/meeting/img1.jpg"}
            desc={"photo"}
            />
            {/* <img src="/img/meeting/img1.jpg" alt="Фотография встречи" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <PhotoCard
            imgPath={"/img/meeting/img2.jpg"}
            desc={"photo"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PhotoCard
            imgPath={"/img/meeting/img3.jpg"}
            desc={"photo"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PhotoCard
            imgPath={"/img/meeting/img4.jpg"}
            desc={"photo"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PhotoCard
            imgPath={"/img/meeting/img5.jpg"}
            desc={"photo"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default MeetingList
