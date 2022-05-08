import Link from "next/link";


const MobileMenu = ({ isOpenMobileMenu, isOpenPages, setIsOpenPages }) => {


    return (
        <ul className={`${isOpenMobileMenu ? isOpenPages ? "h-[325px]" : "h-[135px]" : "h-0"} lg:hidden rounded-sm transition-[height] ease-in duration-500 overflow-hidden rtl mx-[15px] bg-white`}>
            <li className="pr-3 border-t border-gray-300">
                <Link href="#">
                    <a className="block w-full py-[10px] font-bold text-slate-333">خانه</a>
                </Link>
            </li>
            <li className="pr-3 border-t border-gray-300">
                <Link href="/movies">
                    <a className="block w-full py-[10px] font-bold text-slate-333">فیلم ها</a>
                </Link>
            </li>
            <li className="pr-3">
                <div className="border-t border-gray-300 flex justify-between items-center">
                    <p className="block w-full py-[10px] font-bold text-slate-333">
                        صفحه ها
                    </p>
                    <svg onClick={() => setIsOpenPages(prevState => !prevState)} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <ul className="pr-4 text-sm">
                    <li className="pr-4 font-bold border-t border-gray-300">
                        <Link href={"#"}>
                            <a className=" block py-2">درباره ما</a>
                        </Link>
                    </li>
                    <li className="pr-4 font-bold border-t border-gray-300">
                        <Link href={"#"}>
                            <a className=" block py-2">ارتباط با ما</a>
                        </Link>
                    </li>
                    <li className="pr-4 font-bold border-t border-gray-300">
                        <Link href={"#"}>
                            <a className=" block py-2">404</a>
                        </Link>
                    </li>
                    <li className="pr-4 font-bold border-t border-gray-300">
                        <Link href={"#"}>
                            <a className=" block py-2">ورود</a>
                        </Link>
                    </li>
                    <li className="pr-4 font-bold border-t border-gray-300">
                        <Link href={"#"}>
                            <a className=" block py-2">ثبت نام</a>
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default MobileMenu;