/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./bestSeries.module.css";

const BestSeries = ({ seriesTabActive, setSeriesTabActive }) => {
    return (
        <div className={`${styles.seriesContainer} text-right rtl w-full h-fit md:px-10 lg:px-20 mt-[50px] py-10`}>
            {/* تیتر کامپوننت */}
            <div className="text-center text-white px-[15px]">
                <h5 className="text-xl mb-3 font-bold tracking-wide">ویژه</h5>
                <h2 className="text-[38px] mb-6 font-extrabold">بهترین سریال ها</h2>
            </div>


            <div>
                <ul className="mb-12 flex justify-center h-[37px] text-center text-white px-[15px]">
                    <li><Link href="#"><a onClick={() => setSeriesTabActive("drama")} className={`${seriesTabActive === "drama" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer text-white text-sm font-medium py-2 px-4`}>درام</a></Link></li>
                    <li><Link href="#"><a onClick={() => setSeriesTabActive("action")} className={`${seriesTabActive === "action" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer  text-white text-sm font-medium py-2 px-4`}>اکشن</a></Link></li>
                    <li><Link href="#"><a onClick={() => setSeriesTabActive("romantic")} className={`${seriesTabActive === "romantic" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer  text-white text-sm font-medium py-2 px-4`}>رمانتیک</a></Link></li>
                </ul>

                {/* tab content */}
                <div className="rtl text-right grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 text-white">

                    {/* 1 */}
                    <div className="px-[15px]">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/01.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div>
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
                                    <a className={`${styles.filmName} hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide `}>
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

                    {/* 2 */}
                    <div className="px-[15px]">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/02.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div>
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
                                    <a className={`${styles.filmName} hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide `}>
                                        THE EARTH
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

                    {/* 3 */}
                    <div className="px-[15px]">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/03.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div>
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
                                    <a className={`${styles.filmName} hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide `}>
                                        CITY DREAMS
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

                    {/* 4 */}
                    <div className="px-[15px]">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/04.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div>
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
                                    <a className={`${styles.filmName} hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide `}>
                                        DIVINE HAND
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

                    {/* 5 */}
                    <div className="px-[15px]">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/05.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div>
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
                                    <a className={`${styles.filmName} hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide `}>
                                        DECEIVED
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

                    {/* 6 */}
                    <div className="px-[15px]">
                        <Link href="#">
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/06.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div>
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href="#">
                                    <a className={`${styles.filmName} hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide `}>
                                        HEAVEN IS NOW
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



                </div>

            </div>
        </div>
    );
}

export default BestSeries;