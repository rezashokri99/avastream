import Link from "next/link";
import styles from "./pagesInDesktop.module.css";


const PagesInDesktop = ({ isOpenUserPagesDesktop }) => {
    return (
        <ul className={`${isOpenUserPagesDesktop ? "h-[203px]" : "h-0"} z-30 text-slate-333 absolute top-[70px] lg:block hidden w-56 rounded-sm transition-[height] ease-in duration-500 overflow-hidden rtl ml-[570px] xl:ml-[650px] bg-white`}>
            <li className={`${styles.btnHover} pr-4 font-bold border-gray-300`}>
                <Link href={"#"}>
                    <a className={`${styles.textHover} block py-2`}>درباره ما</a>
                </Link>
            </li>
            <li className={`${styles.btnHover} pr-4 font-bold border-t border-gray-300`}>
                <Link href={"#"}>
                    <a className={`${styles.textHover} block py-2`}>ارتباط با ما</a>
                </Link>
            </li>
            <li className={`${styles.btnHover} pr-4 font-bold border-t border-gray-300`}>
                <Link href={"#"}>
                    <a className={`${styles.textHover} block py-2`}>404</a>
                </Link>
            </li>
            <li className={`${styles.btnHover} pr-4 font-bold border-t border-gray-300`}>
                <Link href={"/auth/login"}>
                    <a className={`${styles.textHover} block py-2`}>ورود</a>
                </Link>
            </li>
            <li className={`${styles.btnHover} pr-4 font-bold border-t border-gray-300`}>
                <Link href={"/auth/signup"}>
                    <a className={`${styles.textHover} block py-2`}>ثبت نام</a>
                </Link>
            </li>
        </ul>
    );
}

export default PagesInDesktop;