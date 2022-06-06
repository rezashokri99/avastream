import HeaderSlider from "./headerSlider";
import MainContent from "./mainConent"

const Main = ({ data, films }) => {

    return (
        <>
            {/* اسلایدر بالای ضفحه */}
            <HeaderSlider />
            {/* main content */}
            <MainContent data={data} films={films} />
        </>
    );
}

export default Main;

