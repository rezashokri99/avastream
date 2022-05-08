import { useState } from "react";
import MobileMenu from "./mobileMenu";
import MobileHeaderLogo from "./MobileHeaderLogo";
import Navbar from "./navbar";
import MobileSearch from "./search";
import UserProfile from "./userProfile";

const HeaderContainer = () => {

    // برای باز و بسته کردن منو state
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    // برای باز و بسته کردن صفحه ها در منو state
    const [isOpenPages, setIsOpenPages] = useState(false);
    // برای باز و بسته کردن مودال دکمه های پروفایل و خروج state
    const [isOpenUserProfile, setIsOpenUserProfile] = useState(false);
    // برای باز و بسته کردن کاپوننت سرچ state
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    // // برای باز و بسته کردن صفحه ها در منو state
    const [isOpenUserPagesDesktop, setIsOpenUserPagesDesktop] = useState(false);
    

    
    
    return (
        <>
            {/* کامپوننت سرچ */}
            <MobileSearch isOpenSearch={isOpenSearch} setIsOpenSearch={setIsOpenSearch}/>
            {/* لوگو */}
            <MobileHeaderLogo />
            {/* نوبار و منو در دسکتاپ */}
            <Navbar setIsOpenMobileMenu={setIsOpenMobileMenu} setIsOpenPages={setIsOpenPages} setIsOpenUserProfile={setIsOpenUserProfile} setIsOpenSearch={setIsOpenSearch} isOpenUserPagesDesktop={isOpenUserPagesDesktop} setIsOpenUserPagesDesktop={setIsOpenUserPagesDesktop} />
            {/* منو در موبایل */}
            <MobileMenu isOpenMobileMenu={isOpenMobileMenu} isOpenPages={isOpenPages} setIsOpenPages={setIsOpenPages} />
            {/* مودال دکمه پروفایل و خروج */}
            <UserProfile isOpenUserProfile={isOpenUserProfile} />
        </>
    );
}

export default HeaderContainer;