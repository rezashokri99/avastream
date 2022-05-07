import Link from "next/link";


const PagesInDesktop = ({ isOpenUserPagesDesktop }) => {
    return (
        <ul className={`${isOpenUserPagesDesktop ? "h-52" : "h-0"} text-slate-333 absolute top-[70px] lg:block hidden w-56 rounded-sm transition-[height] ease-in duration-500 overflow-hidden rtl ml-[570px] xl:ml-[650px] bg-fuchsia-100`}>
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
    );
}

export default PagesInDesktop;