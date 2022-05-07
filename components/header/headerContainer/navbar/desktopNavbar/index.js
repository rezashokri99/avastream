/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PagesInDesktop from "../../PagesInDesktop";


const DesktopNavbarMenu = ({ isOpenUserPagesDesktop, setIsOpenUserPagesDesktop }) => {
    
    // هندلر صفحه ها در دسکتاپ منو
    const openAndClosePagesInDesktop = () => {
        setIsOpenUserPagesDesktop(prevState => !prevState)
    }

    return (
        <ul className="hidden lg:flex rtl items-center text-white">
            <li className="flex items-center">
                <Link href="#">
                    <a className="ml-5 w-[140px] h-4">
                        <img src="/assets/images/header-logo.png" alt="logo" />
                    </a>
                </Link>
            </li>
            <li className="px-5 border-r border-gray-500">
                <Link href="#">
                    <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer font-bold ">خانه</a>
                </Link>
            </li>
            <li className="px-5 border-r border-gray-500">
                <Link href="#">
                    <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer font-bold ">فیلم ها</a>
                </Link>
            </li>
            <li onClick={openAndClosePagesInDesktop} className="px-5 border-r border-gray-500 flex items-center">
                <p className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer font-bold">صفحه ها</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[14px] w-[14px] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                 {/* منو صفحه ها در دسکتاپ*/}
                <PagesInDesktop isOpenUserPagesDesktop={isOpenUserPagesDesktop}  />
            </li>
        </ul>
    );
}

export default DesktopNavbarMenu;