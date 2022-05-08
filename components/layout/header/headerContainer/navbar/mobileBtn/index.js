const MobileHumbergerMenu = ({ openAndCloseMenu }) => {
    return (
        <>
            {/* menu btn */}
            <div onClick={openAndCloseMenu} className="lg:hidden bg-red-orginal px-3 py-1.5 border border-transparent rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FFF" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </>
    );
}

export default MobileHumbergerMenu;