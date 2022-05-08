import Backdrop from "./Backdrop";

const MobileSearch = ({ isOpenSearch, setIsOpenSearch }) => {

    // هندلر دکمه بستن
    const closeSearchComponent = () => {
        setIsOpenSearch(false);
    }

    return (
        <>
            {/* بک دراپ */}
            <Backdrop isOpenSearch={isOpenSearch} />
            <div className={`${isOpenSearch ? "block" : "hidden"} rtl z-30 fixed w-screen h-screen`}>
                {/* دکمه بستن */}
                <div className="mt-3 mr-3 w-full">
                    <svg onClick={closeSearchComponent} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {/* اینپوت سرچ */}
                <div className="w-full h-full flex justify-center items-center">
                    <div className="border-2 overflow-hidden h-[70px] w-full mx-4 border-white rounded-tr-full rounded-br-full relative flex justify-between items-center">
                        <input placeholder="چی میخوای ببینی...؟" className="text-white mr-7 w-[270px] h-12 bg-transparent absolute outline-0" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-6 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FFF" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileSearch;