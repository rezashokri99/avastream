const Backdrop = ({ isOpenSearch }) => {
    return (
        <div className={`${isOpenSearch ? "block" : "hidden"} z-20 w-screen h-full bg-black opacity-90 fixed`}></div>
    );
}

export default Backdrop;