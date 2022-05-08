/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

const MainTabs = ({ nameTitle, mainTabActive, setMainTabActive }) => {
    return (
        <div className="py-[50px] md:px-10 lg:px-20 rtl text-right">

            {
                nameTitle ?

                    <h2 className="text-lg font-bold text-white pb-3 mb-7 border-b-4 border-b-red-orginal w-fit">{nameTitle}</h2> :

                    <ul className="px-[15px] w-full h-[37px] mb-4 flex items-center">
                        <li><Link href="#"><a onClick={() => setMainTabActive("featured")} className={`${mainTabActive === "featured" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer text-white text-sm font-medium py-2 px-4`}>ویژه</a></Link></li>
                        <li><Link href="#"><a onClick={() => setMainTabActive("movies")} className={`${mainTabActive === "movies" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer  text-white text-sm font-medium py-2 px-4`}>فیلم ها</a></Link></li>
                        <li><Link href="#"><a onClick={() => setMainTabActive("shows")} className={`${mainTabActive === "shows" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer  text-white text-sm font-medium py-2 px-4`}>سریال ها</a></Link></li>
                    </ul>
            }

            {/* tab content */}
            <div className="rtl text-right grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 text-white">

                {/* 1 */}
                <div className="px-[15px]">
                    <Link href={`/movies/film`}>
                        <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                            <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/01.jpg" alt="movie" />
                        </a>
                    </Link>
                    <div>
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

                {/* 2 */}
                <div className="px-[15px]">
                    <Link href={`/movies/film`}>
                        <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                            <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/02.jpg" alt="movie" />
                        </a>
                    </Link>
                    <div>
                        <h2 className="mt-3 mb-1 h-fit">
                            <Link href={`/movies/film`}>
                                <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide ">
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
                    <Link href={`/movies/film`}>
                        <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                            <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/03.jpg" alt="movie" />
                        </a>
                    </Link>
                    <div>
                        <h2 className="mt-3 mb-1 h-fit">
                            <Link href={`/movies/film`}>
                                <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide ">
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
                    <Link href={`/movies/film`}>
                        <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                            <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/04.jpg" alt="movie" />
                        </a>
                    </Link>
                    <div>
                        <h2 className="mt-3 mb-1 h-fit">
                            <Link href={`/movies/film`}>
                                <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide ">
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
                    <Link href={`/movies/film`}>
                        <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                            <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/05.jpg" alt="movie" />
                        </a>
                    </Link>
                    <div>
                        <h2 className="mt-3 mb-1 h-fit">
                            <Link href={`/movies/film`}>
                                <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide ">
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
                    <Link href={`/movies/film`}>
                        <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                            <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/06.jpg" alt="movie" />
                        </a>
                    </Link>
                    <div>
                        <h2 className="mt-3 mb-1 h-fit">
                            <Link href={`/movies/film`}>
                                <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide ">
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
    );
}

export default MainTabs;