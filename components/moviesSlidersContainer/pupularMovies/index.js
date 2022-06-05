/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import styles from "./pupularMovies.module.css";
import { useRouter } from "next/router";


SwiperCore.use([Navigation, Pagination])

const PupularMovies = ({ nameTitle, data }) => {

    const location = useRouter();

    const [countShowSlider, setCountShowSlider] = useState(2);

    // هندلر اسکرول
    const onScroll = useCallback(event => {
        const { innerWidth } = window;

        // اگر اسکرول از 1200 پیکسل اومد پایینتر ست استیت کن
        if (innerWidth > 1200) {
            setCountShowSlider(5)
            // اگر اسکرول از 600 پیکسل اومد پایینتر ست استیت کن
        } else if (innerWidth > 600) {
            setCountShowSlider(3)

        } else {
            setCountShowSlider(2)
        }
    }, []);

    useEffect(() => {
        // لستنر اسکرول
        window.addEventListener("scroll", onScroll, { passive: true });
    });



    return (
        <div className="py-[50px] mx-[15px] md:px-10 lg:px-20 h-fit rtl text-right">
            <h2 className=" text-lg font-bold text-white pb-3 mb-7 border-b-4 border-b-red-orginal w-fit">{nameTitle}</h2>

            <Swiper
                slidesPerView={countShowSlider}
                spaceBetween={30}
                dir="rtl"
                loop={true}
                autoplay={{
                    delay: 4000,
                }}

                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className={`${styles.sliderContainer} select-none`}
            >
                {
                    data.map((film) => (
                        <SwiperSlide key={film._id}>
                            <div className="">
                                <Link href={`/movies/${film._id}`}>
                                    <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                        <img src={`data: ${film.poster.media.data.contentType};base64,${new Buffer.from(film.poster.media.data.data).toString("base64")}`} className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden" alt="movie" />
                                    </a>
                                </Link>
                                <div className="text-white">
                                    <h2 className="mt-3 mb-1 h-fit">
                                        <Link href={`/movies/${film._id}`}>
                                            <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide ">
                                                {film.name}
                                            </a>
                                        </Link>
                                    </h2>
                                    <div className="">
                                        {/* <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">اکشن</span>
                                        <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">18+</span> */}
                                        <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">{film.date}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

                {/* 2 */}
                {/* <SwiperSlide>
                    <div className="">
                        <Link href={`/movies/film`}>
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\popular\02.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div className="text-white">
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href={`/movies/film`}>
                                    <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide ">
                                        IRON DOOR
                                    </a>
                                </Link>
                            </h2>
                            <div className="">
                                <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">اکشن</span>
                                <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">18+</span>
                                <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">2021</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
                


            </Swiper>
        </div>
    );
}

export default PupularMovies;