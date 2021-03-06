/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, FreeMode, Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import styles from "./topTenMovies.module.css";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/router";


SwiperCore.use([Navigation, Pagination])

const TopTenMovies = ({ nameTitle, data }) => {

    const location = useRouter();


    return (
        <div className="py-[50px] mx-[15px] md:px-10 lg:px-20 h-fit rtl text-right">

            <h2 className="text-lg font-bold text-white pb-3 mb-7 border-b-4 border-b-red-orginal w-fit">{nameTitle}</h2>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                dir="rtl"
                loop={true}
                autoplay={{
                    delay: 4000,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="w-fit"
            >
                {
                    data.map((film) => (
                        <SwiperSlide key={film._id} className={`${styles.slideContainer} select-none`}>
                            <img src={`data: ${film.poster.media.data.contentType};base64,${new Buffer.from(film.poster.media.data.data).toString("base64")}`} className="h-[400px] w-full lg:w-[420px] xl:w-full xl:h-[600px]" alt="movie" />
                            <div className={`rtl absolute top-0 right-0 z-10 w-full lg:w-[420px] xl:w-full h-full pt-28 xl:pt-52 mr-0 text-white`}>
                                <Link href={`/movies/${film._id}`}>
                                    <h2 className=" cursor-pointer mb-4 font-extrabold text-[25px] pr-[58px] sm:pr-[135px] md:pr-[190px] lg:pr-[75px] xl:pr-[180px] xl:text-[42px] ">{film.name}</h2>
                                </Link>


                                <p className="mb-6 pr-4 w-[270px] sm:w-[350px] md:w-[400px] lg:w-[290px] text-right text-[13px] xl:w-[400px] xl:text-sm">{film.content}</p>
                                <div className="flex pr-4">
                                    <button className={`${styles.btnHover} py-[10px] px-4 md:px-6 lg:px-4 xl:px-6 bg-red-orginal text-white  flex items-center `}>
                                        <p className="z-10 flex items-center">
                                            ?????? ????
                                            <FaPlay className="mr-2.5 text-lg" />
                                        </p>
                                    </button>
                                    <button className={`${styles.btnHover} py-[10px] px-2 md:px-4 lg:px-2 xl:px-4 bg-red-orginal text-white flex items-center mr-3`}>
                                        <p className="z-10 flex items-center">
                                            ???????? ????
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-0.5 h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                            </svg>
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }




                {/* 5 */}
                {/* <SwiperSlide className={`${styles.slideContainer} select-none`}>
                    <img className="h-[400px] w-full lg:w-[420px] xl:w-full xl:h-[600px]" src="\assets\images\movies/05.jpg" />
                    <div className={`rtl absolute top-0 right-0 z-10 w-full lg:w-[420px] xl:w-full h-full pt-28 xl:pt-52 mr-0 text-white`}>
                        <h2 className="mb-4 font-extrabold text-[25px] pr-[58px] sm:pr-[135px] md:pr-[190px] lg:pr-[75px] xl:pr-[180px] xl:text-[42px]">THE HOUSE</h2>

                        <p className="mb-6 pr-4 w-[270px] sm:w-[350px] md:w-[400px] lg:w-[290px] text-right text-[13px] xl:w-[400px] xl:text-sm">???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ???????? ?????? ?? ???? ?????????????? ???? ???????????? ???????????? ??????. ?????????????? ?? ???????? ???????? ???????????????? ?????????????? ???? ????????...</p>
                        <div className="flex pr-4">
                            <button className={`${styles.btnHover} py-[10px] px-4 md:px-6 lg:px-4 xl:px-6 bg-red-orginal text-white  flex items-center `}>
                                <p className="z-10 flex items-center">
                                    ?????? ????
                                    <FaPlay className="mr-2.5 text-lg" />
                                </p>
                            </button>
                            <button className={`${styles.btnHover} py-[10px] px-2 md:px-4 lg:px-2 xl:px-4 bg-red-orginal text-white flex items-center mr-3`}>
                                <p className="z-10 flex items-center">
                                    ???????? ????
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-0.5 h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </p>
                            </button>
                        </div>
                    </div>
                </SwiperSlide> */}


            </Swiper>
        </div>
    );
}

export default TopTenMovies;