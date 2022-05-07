/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import styles from "./slider.module.css";
import { FaPlay } from "react-icons/fa";


SwiperCore.use([Navigation, Pagination])

const HeaderSlider = () => {
  return (
    <div>
      <Swiper
        className={`${styles.sliderContainer} relative h-[600px] md:h-[750px]`}
        dir="rtl"
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        effect={"coverflow"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
      >
        <SwiperSlide className={styles.slideContainer}>
          <img className="h-full w-full" src="/assets\images\slider/slider1.jpg" />
          <div className={`${styles.descriptionSlide} rtl absolute top-0 right-0 z-10 h-full mt-28 mr-4 sm:mt-40 md:mt-52  md:mr-14 lg:mr-24 text-white`}>
            <h2 className="bg-yellow-500 text-slate-333 font-extrabold text-lg py-0.5 px-3.5 w-fit rounded">جدید</h2>
            <h1 className="my-[25px] md:my-8 text-7xl font-extrabold mr-10 text-[40px] sm:mr-32 sm:text-[40px] md:mr-16 md:text-[60px] lg:mr-28 lg:text-[65px] 2xl:mr-40 2xl:text-7xl">IRON DOOR</h1>
            <div className="mb-9 mr-[90px] sm:mr-[170px] md:mr-[212px] lg:mr-72 2xl:mr-[370px]">
              <span className="mr-4 text-[13px] md:text-sm text-white">2021</span>
              <span className="mr-4 text-[13px] md:text-sm text-white py-[2px] px-[10px] rounded-3xl border-2 border-red-orginal">+18</span>
              <span className="mr-4 text-[13px] md:text-sm text-white">2h 6m</span>
            </div>
            <p className="my-8 w-[270px] sm:w-[340px] md:w-[400px] lg:w-[450px] 2xl:w-[500px] text-right text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد...</p>
            <div className="flex">
              <button className={`${styles.btnHover} py-[10px] px-5 md:px-[30px] bg-red-orginal text-white  flex items-center `}>
                <p className="z-10 flex items-center">
                  پخش کن
                  <FaPlay className="mr-2.5 text-lg" />
                </p>
              </button>
              <button className={`${styles.btnHover} py-[10px] px-3 md:px-[20px] bg-red-orginal text-white flex items-center mr-4`}>
                <p className="z-10 flex items-center">
                  لیست من
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-0.5 h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideContainer}>
          <img className="h-full w-full" src="/assets\images\slider/slider2.jpg" />
          <div className={`${styles.descriptionSlide} rtl absolute top-0 right-0 z-10 h-full mt-28 mr-4 sm:mt-40 md:mt-52  md:mr-14 lg:mr-24 text-white`}>
            <h2 className="bg-yellow-500 text-slate-333 font-extrabold text-lg py-0.5 px-3.5 w-fit rounded">جدید</h2>
            <h1 className="my-[25px] md:my-8 text-7xl font-extrabold mr-10 text-[40px] sm:mr-32 sm:text-[40px] md:mr-16 md:text-[60px] lg:mr-28 lg:text-[65px] 2xl:mr-40 2xl:text-7xl">IRON DOOR</h1>
            <div className="mb-9 mr-[84px] sm:mr-[170px] md:mr-[212px] lg:mr-72 2xl:mr-[370px]">
              <span className="mr-4 text-[13px] md:text-sm text-white">2021</span>
              <span className="mr-4 text-[13px] md:text-sm text-white py-[2px] px-[10px] rounded-3xl border-2 border-red-orginal">+18</span>
              <span className="mr-4 text-[13px] md:text-sm text-white">2h 6m</span>
            </div>
            <p className="my-8 w-[270px] sm:w-[340px] md:w-[400px] lg:w-[450px] 2xl:w-[500px] text-right text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد...</p>
            <div className="flex">
              <button className={`${styles.btnHover} py-[10px] px-5 md:px-[30px] bg-red-orginal text-white  flex items-center `}>
                <p className="z-10 flex items-center">
                  پخش کن
                  <FaPlay className="mr-2.5 text-lg" />
                </p>
              </button>
              <button className={`${styles.btnHover} py-[10px] px-3 md:px-[20px] bg-red-orginal text-white flex items-center mr-4`}>
                <p className="z-10 flex items-center">
                  لیست من
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-0.5 h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideContainer}>
          <img className="h-full w-full" src="/assets\images\slider/slider3.jpg" />
          <div className={`${styles.descriptionSlide} rtl absolute top-0 right-0 z-10 h-full mt-28 mr-4 sm:mt-40 md:mt-52  md:mr-14 lg:mr-24 text-white`}>
            <h2 className="bg-yellow-500 text-slate-333 font-extrabold text-lg py-0.5 px-3.5 w-fit rounded">جدید</h2>
            <h1 className="my-[25px] md:my-8 text-7xl font-extrabold mr-10 text-[40px] sm:mr-32 sm:text-[40px] md:mr-16 md:text-[60px] lg:mr-28 lg:text-[65px] 2xl:mr-40 2xl:text-7xl">IRON DOOR</h1>
            <div className="mb-9 mr-[84px] sm:mr-[170px] md:mr-[212px] lg:mr-72 2xl:mr-[370px]">
              <span className="mr-4 text-[13px] md:text-sm text-white">2021</span>
              <span className="mr-4 text-[13px] md:text-sm text-white py-[2px] px-[10px] rounded-3xl border-2 border-red-orginal">+18</span>
              <span className="mr-4 text-[13px] md:text-sm text-white">2h 6m</span>
            </div>
            <p className="my-8 w-[270px] sm:w-[340px] md:w-[400px] lg:w-[450px] 2xl:w-[500px] text-right text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد...</p>
            <div className="flex">
              <button className={`${styles.btnHover} py-[10px] px-5 md:px-[30px] bg-red-orginal text-white  flex items-center `}>
                <p className="z-10 flex items-center">
                  پخش کن
                  <FaPlay className="mr-2.5 text-lg" />
                </p>
              </button>
              <button className={`${styles.btnHover} py-[10px] px-3 md:px-[20px] bg-red-orginal text-white  flex mr-4 `}>
                <p className="z-10 flex items-center">
                  لیست من
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-0.5 h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.backDropFilter}>

      </div>
      {/* <Swiper
        className="h-[600px] rtl"
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}

      >
        <SwiperSlide><img className="absolute w-full h-[600px]" src="/assets\images\slider/slider1.jpg" /><span className="absolute">متن اسلاید شماره 1</span></SwiperSlide>
        <SwiperSlide><img className="absolute w-full h-[600px]" src="/assets\images\slider/slider2.jpg" /><span className="absolute">متن اسلاید شماره 1</span></SwiperSlide>
        <SwiperSlide><img className="absolute w-full h-[600px]" src="/assets\images\slider/slider3.jpg" /><span className="absolute">متن اسلاید شماره 1</span></SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default HeaderSlider;
