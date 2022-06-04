import HeaderSlider from "./headerSlider";
import MainContent from "./mainConent"

const Main = ({ data }) => {

    return (
        <>
            {/* اسلایدر بالای ضفحه */}
            <HeaderSlider />
            {/* main content */}
            <MainContent data={data} />
        </>
    );
}

export default Main;

