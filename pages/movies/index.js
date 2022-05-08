import MainTabs from "../../components/moviesSlidersContainer/mainTabs/MainTabs";
import PupularMovies from "../../components/moviesSlidersContainer/pupularMovies";
import TopTenMovies from "../../components/moviesSlidersContainer/topTenMovies";

const Movies = () => {
    return (
        <div>
            <TopTenMovies />
            <PupularMovies nameTitle={"اخیرا اضافه شده"} />
            <MainTabs nameTitle={"فیلم های هالیوود"} />
            <MainTabs nameTitle={"فیلم های برنده جایزه"} />
        </div>
    );
}
 
export default Movies;