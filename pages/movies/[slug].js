/* eslint-disable @next/next/no-img-element */
import { FaCity, FaPlay } from "react-icons/fa";
import styles from "./moviePage.module.css";


const MoviePage = () => {
    return (
        <div className="my-[50px] py-[50px] md:px-14 lg:px-24 rtl text-right px-[15px] grid grid-cols-1 md:grid-cols-4 md:gap-x-6">
            {/* عکس قیلم */}
            <div className="md:col-span-1">
                <img className="mb-6" src="/assets/images/play-page/01.jpg" alt="movie" />
                <div className="flex  justify-center items-center gap-x-6 text-gray-clean text-lg">
                    <span>1080p</span>
                    <span>24p</span>
                    <span><img src="/assets/images/dts-logo.png" alt="voice-type" /></span>
                    <span>7.1</span>
                </div>
            </div>

            {/* توضیحات قیلم */}
            <div className="md:col-span-3 w-full">
                {/* اسم فیلم */}
                <div className="my-[30px]">
                    <p className="text-[32px] lg:text-[42px] font-extrabold text-left text-white">THE DARK KNIGHT RISES</p>
                </div>

                {/* توضیحات مختصر فیلم */}
                <div className="mb-6 flex flex-wrap items-center ltr gap-y-2 text-gray-clean text-[13px] lg:text-base">

                    <span className="mr-3 flex items-end lg:items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        +18
                    </span>

                    <span className="mr-3 flex items-end lg:items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2hr 45min
                    </span>

                    <span className="mr-3 flex items-end lg:items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2021
                    </span>

                    <span className="mr-3 flex items-end lg:items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        action
                    </span>

                    <span className="mr-3 flex items-center">
                        <FaCity className="mr-1 text-lg" />
                        United States
                    </span>

                </div>

                {/* movie description */}
                <div className="my-8">
                    <p className="text-sm lg:text-base text-gray-clean">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                </div>

                {/* عوامل فیلم */}
                <div className="text-white mb-10 grid lg:grid-cols-2">
                    <div>
                        <h2 className="mb-2 text-lg font-bold">کارگردان</h2>
                        <p className="text-sm mb-4">رضا شکری</p>
                    </div>
                    <div>
                        <h2 className="mb-2 text-lg font-bold">بازیگران</h2>
                        <p className="text-sm mb-4">برد پیت, آنجلینا جولی, جیسون استاتهام, دواین جانسون, برد پیت, آنجلینا جولی </p>
                    </div>
                </div>
                
                {/* دکمه های اجرا و ... */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 lg:gap-x-4 pl-[15px]">


                    <button className={`${styles.btnHover} py-3 w-full bg-red-orginal text-white  flex items-center `}>
                        <p className="z-10 flex items-center justify-center w-full">
                            پخش کن
                            <FaPlay className="mr-2.5 text-lg" />
                        </p>
                    </button>

                    <button className={`${styles.btnHover} py-3 w-full  bg-red-orginal text-white  flex items-center `}>
                        <p className="z-10 flex items-center justify-center w-full">
                            لیست من
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-0.5 h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </p>
                    </button>

                    <button className={`${styles.btnHover} py-3 w-full bg-red-orginal text-white  flex items-center `}>
                        <p className="z-10 flex items-center justify-center w-full">
                            اشتراک
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-0.5 h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                        </p>
                    </button>

                    <button className={`${styles.btnHover} py-3 w-full bg-red-orginal text-white  flex items-center `}>
                        <p className="z-10 flex items-center justify-center w-full">
                            تریلر
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-0.5 h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                            </svg>
                        </p>
                    </button>


                </div>

            </div>

        </div>
    );
}

export default MoviePage;