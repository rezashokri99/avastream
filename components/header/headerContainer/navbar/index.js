import DesktopNavbarMenu from "./desktopNavbar";
import MobileHumbergerMenu from "./mobileNavbar";
import styles from "./navbarMenu.module.css";
import { useState, useCallback, useEffect } from "react";


const Navbar = ({ setIsOpenMobileMenu, setIsOpenPages, setIsOpenUserProfile, setIsOpenSearch, setIsOpenUserPagesDesktop, isOpenUserPagesDesktop }) => {


    const [scrollState, setScrollState] = useState(false);

    const onScroll = useCallback(event => {
        const { scrollY } = window;

        if (scrollY > 80) {
            if(!scrollState){
                setScrollState(() => true);
            }
        } else {
            console.log(scrollState);
            setScrollState(false);
            if(scrollState){
            }
        }
    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
    });

    // هندلر دکمه همبرگر منو
    const openAndCloseMenu = () => {
        setIsOpenMobileMenu(prevstate => !prevstate)
        setIsOpenPages(false);
        setIsOpenUserProfile(false)
    }

    // هندلر دکمه کاربر
    const openAndCloseUserProfile = () => {
        setIsOpenUserProfile(prevstate => !prevstate);
        setIsOpenMobileMenu(false)
        setIsOpenMobileMenu(false)
    }

    // هندلر دکمه سرچ
    const openAndCloseSearchComponent = () => {
        setIsOpenSearch(true)
    }



    return (
        <div className={`${scrollState && "fixed top-0"}  px-[15px] md:px-14 lg:px-24 z-10 rtl h-[70px] w-full bg-gray-orginal flex items-center justify-between`}>
            {/* همبرگر منو در موبایل */}
            <MobileHumbergerMenu openAndCloseMenu={openAndCloseMenu} />
            {/* همبرگر منو در موبایل */}
            <DesktopNavbarMenu isOpenUserPagesDesktop={isOpenUserPagesDesktop} setIsOpenUserPagesDesktop={setIsOpenUserPagesDesktop} />

            <ul className="text-white flex items-center gap-x-5">
                {/* search btn */}
                <li onClick={openAndCloseSearchComponent}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-[18px] w-[18px] hover:text-red-orginal transition ease-in-out delay-150 cursor-pointer" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </li>
                {/* notification btn */}
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-red-orginal transition ease-in-out delay-150 cursor-pointer rotate-12" fill="currentColor" viewBox="0 0 24 24" stroke="none" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </li>
                {/* setting btn */}
                <li>
                    <svg className={`${styles.filter_animate} hover:text-red-orginal transition ease-in-out delay-150 cursor-pointer`} fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 14v-4c-1.619 0-2.906.267-3.705-1.476-.697-1.663.604-2.596 1.604-3.596l-2.829-2.828c-1.033 1.033-1.908 2.307-3.666 1.575-1.674-.686-1.404-2.334-1.404-3.675h-4c0 1.312.278 2.985-1.404 3.675-1.761.733-2.646-.553-3.667-1.574l-2.829 2.828c1.033 1.033 2.308 1.909 1.575 3.667-.348.849-1.176 1.404-2.094 1.404h-1.581v4c1.471 0 2.973-.281 3.704 1.475.698 1.661-.604 2.596-1.604 3.596l2.829 2.829c1-1 1.943-2.282 3.667-1.575 1.673.687 1.404 2.332 1.404 3.675h4c0-1.244-.276-2.967 1.475-3.704 1.645-.692 2.586.595 3.596 1.604l2.828-2.829c-1-1-2.301-1.933-1.604-3.595l.03-.072c.687-1.673 2.332-1.404 3.675-1.404zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
                    </svg>
                </li>
                {/* profile btn */}
                <li onClick={openAndCloseUserProfile} className="bg-red-orginal rounded-full h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;