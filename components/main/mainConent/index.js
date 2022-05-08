import { useState } from "react";
import BestSeries from "./bestSeries";
import MainTabs from "./mainTabs/MainTabs";
import PupularMovies from "./pupularMovies";
import TopTenMovies from "./topTenMovies";

const MainContent = () => {

    const [mainTabActive, setMainTabActive] = useState("featured");
    const [seriesTabActive, setSeriesTabActive] = useState("drama");

    return (
        <div className="pt-[50px]">
            <MainTabs mainTabActive={mainTabActive} setMainTabActive={setMainTabActive} />
            <PupularMovies />
            <TopTenMovies />
            <BestSeries seriesTabActive={seriesTabActive} setSeriesTabActive={setSeriesTabActive} />
        </div>
    );
}

export default MainContent;