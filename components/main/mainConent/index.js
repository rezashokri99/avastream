import { useState } from "react";
import BestSeries from "../../moviesSlidersContainer/bestSeries";
import MainTabs from "../../moviesSlidersContainer/mainTabs/MainTabs";
import PupularMovies from "../../moviesSlidersContainer/pupularMovies";
import TopTenMovies from "../../moviesSlidersContainer/topTenMovies";

const MainContent = () => {

    const [mainTabActive, setMainTabActive] = useState("featured");
    const [seriesTabActive, setSeriesTabActive] = useState("drama");

    return (
        <div className="pt-[50px]">
            <MainTabs mainTabActive={mainTabActive} setMainTabActive={setMainTabActive} />
            <PupularMovies nameTitle={"فیلم های محبوب"} />
            <TopTenMovies nameTitle={"ده فیلم برتر"} />
            <BestSeries seriesTabActive={seriesTabActive} setSeriesTabActive={setSeriesTabActive} />
        </div>
    );
}

export default MainContent;