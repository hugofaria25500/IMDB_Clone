/*REACT*/
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';

/*COMPONENTS*/
import ReleaseMediaCard from "./ReleaseMediaCard";

/*CSS*/
import "../css/SingleItemCarousel.css";

function SingleItemCarousel( { catalog, onOpenTrailerModal, loading} ) {
    return (
        <div className="bg-black w-full h-[calc(100vh-100px)] flex items-center justify-center">

            <Swiper
                navigation={true}
                modules={[Pagination, Navigation]}
                loop={true}
                className="mySwiper"
            >
                {catalog.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ReleaseMediaCard item={item} onOpenTrailerModal={onOpenTrailerModal} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SingleItemCarousel;