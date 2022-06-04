/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

const MainTabs = ({ nameTitle, mainTabActive, setMainTabActive, data }) => {
    
    const clickOnMainTabHandler = (e, value) => {
        e.preventDefault();
        setMainTabActive(value)
    }

    return (
        <div className="py-[50px] md:px-10 lg:px-20 rtl text-right">

            {
                nameTitle ?

                    <h2 className="text-lg font-bold text-white pb-3 mb-7 border-b-4 border-b-red-orginal w-fit">{nameTitle}</h2> :

                    <ul className="px-[15px] w-full h-[37px] mb-4 flex items-center">
                        <li><Link href="#"><a name="featured" onClick={(e) => clickOnMainTabHandler(e, "featured")} className={`${mainTabActive === "featured" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer text-white text-sm font-medium py-2 px-4`}>ویژه</a></Link></li>
                        <li><Link href="#"><a name="movies" onClick={(e) => clickOnMainTabHandler(e, "movies")} className={`${mainTabActive === "movies" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer  text-white text-sm font-medium py-2 px-4`}>فیلم ها</a></Link></li>
                        <li><Link href="#"><a name="series" onClick={(e) => clickOnMainTabHandler(e, "series")} className={`${mainTabActive === "series" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer  text-white text-sm font-medium py-2 px-4`}>سریال ها</a></Link></li>
                    </ul>
            }

            {/* tab content */}
            <div className="rtl text-right grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 text-white">
                {/* mainTabActive === "movies" ? data.movies_slider :  */}
                {
                    mainTabActive === "featured" && data.featured.map((film) => (
                        <div key={film._id} className="px-[15px]">
                            <Link href={`/movies/${film._id}`}>
                                <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                    <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/01.jpg" alt="movie" />
                                </a>
                            </Link>
                            <div>
                                <h2 className="mt-3 mb-1 h-fit">
                                    <Link href={`/movies/${film._id}`}>
                                        <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide ">
                                            {film.name}
                                        </a>
                                    </Link>
                                </h2>
                                <div className="">
                                    {/* <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">اکشن</span> */}
                                    {/* <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">18+</span> */}
                                    <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">{film.date}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    mainTabActive === "movies" && data.movies.map((film) => (
                        <div key={film._id} className="px-[15px]">
                            <Link href={`/movies/${film._id}`}>
                                <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                    <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/01.jpg" alt="movie" />
                                </a>
                            </Link>
                            <div>
                                <h2 className="mt-3 mb-1 h-fit">
                                    <Link href={`/movies/${film._id}`}>
                                        <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide ">
                                            {film.name}
                                        </a>
                                    </Link>
                                </h2>
                                <div className="">
                                    {/* <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">اکشن</span> */}
                                    {/* <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">18+</span> */}
                                    <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">{film.date}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    mainTabActive === "series" && data.series.map((film) => (
                        <div key={film._id} className="px-[15px]">
                            <Link href={`/movies/${film._id}`}>
                                <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                    <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/01.jpg" alt="movie" />
                                </a>
                            </Link>
                            <div>
                                <h2 className="mt-3 mb-1 h-fit">
                                    <Link href={`/movies/${film._id}`}>
                                        <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide ">
                                            {film.name}
                                        </a>
                                    </Link>
                                </h2>
                                <div className="">
                                    {/* <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">اکشن</span> */}
                                    {/* <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">18+</span> */}
                                    <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">{film.date}</span>
                                </div>
                            </div>
                        </div>
                    ))

                }


                {/* <div className="px-[15px]">
                    <Link href={`/movies/${film._id}`}>
                        <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                            <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/06.jpg" alt="movie" />
                        </a>
                    </Link>
                    <div>
                        <h2 className="mt-3 mb-1 h-fit">
                            <Link href={`/movies/${film._id}`}>
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
                </div> */}



            </div>
        </div>
    );
}

export default MainTabs;