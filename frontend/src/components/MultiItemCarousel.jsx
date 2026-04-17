import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../css/MultiItemCarousel.css";

import CarouselCard from "./CarouselCard";

function MultiItemCarouselSwiper({ title, catalog }) {
    return (
        <div className="w-full px-[50px] py-6 bg-black">
            
            {/* TITLE */}
            <h2 className="text-2xl font-bold text-white mb-4">
                {title}
            </h2>

            {/* SWIPER */}
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={5}
                slidesPerView={8}
                slidesPerGroup={1}
                loop={false}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    800: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 7 },
                    1500: { slidesPerView: 8 },
                }}>
                {catalog.map((catalog, index) => (
                    <SwiperSlide key={index}>
                        <div className="rounded-xl overflow-hidden">
                            <CarouselCard catalog={catalog} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MultiItemCarouselSwiper;