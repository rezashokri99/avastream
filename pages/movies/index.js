import axios from "axios";
import MainTabs from "../../components/moviesSlidersContainer/mainTabs/MainTabs";
import PupularMovies from "../../components/moviesSlidersContainer/pupularMovies";
import TopTenMovies from "../../components/moviesSlidersContainer/topTenMovies";
import BestSeries from "../../components/moviesSlidersContainer/bestSeries";
import { useState } from "react";


const Movies = ({ data, films}) => {

  const [seriesTabActive, setSeriesTabActive] = useState("scifi");

    return (
        <div>
            <BestSeries data={films} seriesTabActive={seriesTabActive} setSeriesTabActive={setSeriesTabActive} />

            {/* <MainTabs data={data} nameTitle={"فیلم های هالیوود"} /> */}
            {/* <MainTabs data={data} nameTitle={"فیلم های برنده جایزه"} /> */}
        </div>
    );
}
 
export default Movies;



export async function getServerSideProps(context) {

    // sliders films
    const data = (await axios.get("/api/films")).data;
  
    // categories films
    const getFilms = (await axios.get("/api/films/categories", { params: { type: "categories", text: "scifi" } })).data;
  
  
    return {
      props: {
        data,
        films: getFilms
      },
    };
  }
  