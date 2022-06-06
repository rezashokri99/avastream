/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./bestSeries.module.css";
import categories from "../../../util/categories.json";
import axios from "axios";
import { useState } from "react";


const BestSeries = ({ seriesTabActive, setSeriesTabActive, data }) => {

    const [filmsData, setFilmsData] = useState(data)
    const clickOnseriesTabActiveHandler = (e, value) => {
        e.preventDefault();

        axios
            .get("/api/films/categories", {
                params: { type: "categories", text: value },
            })
            .then((res) => {
                console.log(res.data);
                setFilmsData(res.data);
                setSeriesTabActive(value)
            })
            .catch((error) => console.log(err));
    }

    return (
        <div className={`${styles.seriesContainer} text-right rtl w-full h-fit md:px-10 lg:px-20 mt-[50px] py-10`}>
            {/* تیتر کامپوننت */}
            <div className="text-center text-white px-[15px]">
                <h5 className="text-xl mb-3 font-bold tracking-wide">ویژه</h5>
                <h2 className="text-[38px] mb-6 font-extrabold">بهترین سریال ها</h2>
            </div>


            <div>
                <ul className="mb-12 flex justify-center h-[37px] text-center text-white px-[15px]">
                    {
                        categories.categories.map((category, index) => (
                            <li key={index}><Link href="#"><a onClick={(e) => clickOnseriesTabActiveHandler(e, category.value)} className={`${seriesTabActive === category.value ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer text-white text-sm font-medium py-2 px-4`}>{category.text}</a></Link></li>

                        ))
                    }
                    {/* <li><Link href="#"><a onClick={(e) => clickOnseriesTabActiveHandler(e, "action")} className={`${seriesTabActive === "action" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer  text-white text-sm font-medium py-2 px-4`}>اکشن</a></Link></li>
                    <li><Link href="#"><a onClick={(e) => clickOnseriesTabActiveHandler(e, "romantic")} className={`${seriesTabActive === "romantic" ? "bg-red-orginal" : "hover:text-red-orginal"} transition ease-in-out duration-200 cursor-pointer  text-white text-sm font-medium py-2 px-4`}>رمانتیک</a></Link></li> */}
                </ul>

                {/* tab content */}
                <div className="rtl text-right grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 text-white">

                    {
                        filmsData.map((film) => (
                            <div key={film._id} className="px-[15px]">
                                <Link href={`/movies/${film._id}`}>
                                    <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                        <img src={`data: ${film.poster[0].media.contentType};base64,${(film.poster[0].media.data)}`} className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden" alt="movie" />
                                    </a>
                                </Link>
                                <div>
                                    <h2 className="mt-3 mb-1 h-fit">
                                        <Link href={`/movies/${film._id}`}>
                                            <a className={`${styles.filmName} hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer sm:text-lg font-bold tracking-wide `}>
                                                {film.name}
                                            </a>
                                        </Link>
                                    </h2>
                                    <div className="">
                                        {/* <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">اکشن</span>
                                        <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">18+</span> */}
                                        <span className="pl-2 text-[11px] md:text-[13px] text-gray-clean">{film.data}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    



                    {/* 6 */}
                    {/* <div className="px-[15px]">
                        <Link href={`/movies/film`}>
                            <a className="-mb-[8px] w-full inline-block overflow-hidden relative">
                                <img className="hover:scale-110 transition ease-in-out duration-300 overflow-hidden " src="assets\images\latest-aditions/06.jpg" alt="movie" />
                            </a>
                        </Link>
                        <div>
                            <h2 className="mt-3 mb-1 h-fit">
                                <Link href={`/movies/film`}>
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
                    </div> */}



                </div>

            </div>
        </div>
    );
}

export default BestSeries;