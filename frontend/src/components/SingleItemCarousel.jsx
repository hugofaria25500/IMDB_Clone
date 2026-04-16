/*REACT*/
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';

/*COMPONENTS*/
import ReleaseMovieCard from "./ReleaseMovieCard";

/*CSS*/
import "../css/SingleItemCarousel.css";

function SingleItemCarousel( { movies } ) {
    return (
        <div className="bg-black w-full h-[calc(100vh-100px)] flex items-center justify-center">

            <Swiper
                navigation={true}
                modules={[Pagination, Navigation]}
                loop={true}
                className="mySwiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <ReleaseMovieCard movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SingleItemCarousel;