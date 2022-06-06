import { useState } from "react";
import BestSeries from "../../moviesSlidersContainer/bestSeries";
import MainTabs from "../../moviesSlidersContainer/mainTabs/MainTabs";
import PupularMovies from "../../moviesSlidersContainer/pupularMovies";
import TopTenMovies from "../../moviesSlidersContainer/topTenMovies";

const MainContent = ({ data, films }) => {

    const [mainTabActive, setMainTabActive] = useState("featured");

    return (
        <div className="pt-[50px]">
            <MainTabs data={data} mainTabActive={mainTabActive} setMainTabActive={setMainTabActive} />
            <TopTenMovies data={data.topTen} nameTitle={"ده فیلم برتر"} />
            <PupularMovies data={data.popular} nameTitle={"فیلم های محبوب"} />
            <PupularMovies data={data.popular} nameTitle={"اخیرا اضافه شده"} />
            <TopTenMovies data={data.topTen} nameTitle={"ده فیلم برتر"} />
        </div>
    );
}

export default MainContent;