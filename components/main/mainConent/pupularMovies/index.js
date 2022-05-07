/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import styles from "./pupularMovies.module.css";


SwiperCore.use([Navigation, Pagination])

const PupularMovies = () => {

    const [countShowSlider, setCountShowSlider] = useState(2);

    const onScroll = useCallback(event => {
        const { innerWidth } = window;

        if (innerWidth > 1200) {
            setCountShowSlider(5)
        }else if(innerWidth > 600) {
            setCountShowSlider(3)
        }else {
            setCountShowSlider(2)
        }
    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
    });



    return (
        <div className="py-[50px] mx-[15px] md:px-10 lg:px-20 h-fit rtl text-right mb-48">
            <h2 className=" text-lg font-bold text-white pb-3 mb-7 border-b-4 border-b-red-orginal w-fit">فیلم های محبوب</h2>
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
                className={styles.sliderContainer} 
            >
                {/* 1 */}
                <SwiperSlide>
                    <div className="">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\popular\01.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div className="text-white">
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
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
                </SwiperSlide>

                {/* 2 */}
                <SwiperSlide>
                    <div className="">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\popular\02.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div className="text-white">
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
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
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className="">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\popular\03.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div className="text-white">
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
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
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                    <div className="">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\popular\04.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div className="text-white">
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
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
                </SwiperSlide>
                {/* 5 */}
                <SwiperSlide>
                    <div className="">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\popular\05.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div className="text-white">
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
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
                </SwiperSlide>
                {/* 6 */}
                <SwiperSlide>
                    <div className="">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\popular\06.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div className="text-white">
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
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
                </SwiperSlide>
                {/* 7 */}
                <SwiperSlide>
                    <div className="">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\popular\07.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div className="text-white">
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
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
                </SwiperSlide>


            </Swiper>
        </div>
    );
}

export default PupularMovies;