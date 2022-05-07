import { useState } from "react";
import MainTabs from "./mainTabs/MainTabs";
import PupularMovies from "./pupularMovies";

const MainContent = () => {

    const [mainTabActive, setMainTabActive] = useState("featured");

    return (
        <div className="py-[50px]">
            <MainTabs mainTabActive={mainTabActive} setMainTabActive={setMainTabActive} />
            <PupularMovies />
        </div>
    );
}

export default MainContent;