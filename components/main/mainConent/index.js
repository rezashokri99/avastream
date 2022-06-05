import { useState } from "react";
import BestSeries from "../../moviesSlidersContainer/bestSeries";
import MainTabs from "../../moviesSlidersContainer/mainTabs/MainTabs";
import PupularMovies from "../../moviesSlidersContainer/pupularMovies";
import TopTenMovies from "../../moviesSlidersContainer/topTenMovies";

const MainContent = ({ data }) => {

    console.log(data);

    const [mainTabActive, setMainTabActive] = useState("featured");
    const [seriesTabActive, setSeriesTabActive] = useState("drama");

    return (
        <div className="pt-[50px]">
            <MainTabs data={data} mainTabActive={mainTabActive} setMainTabActive={setMainTabActive} />
            <PupularMovies data={data.popular} nameTitle={"فیلم های محبوب"} />
            <TopTenMovies data={data.topTen} nameTitle={"ده فیلم برتر"} />
            <BestSeries data={data.series} seriesTabActive={seriesTabActive} setSeriesTabActive={setSeriesTabActive} />
        </div>
    );
}

export default MainContent;