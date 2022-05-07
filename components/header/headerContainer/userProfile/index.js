import Link from "next/link";

const UserProfile = ({ isOpenUserProfile }) => {
    return (
        <ul className={`${isOpenUserProfile ? "h-28" : "h-0"} w-56 rounded-sm transition-[height] ease-in duration-500 overflow-hidden rtl mx-[15px] bg-fuchsia-100`}>
            <li className="border-t border-gray-300">
                <Link href="#">
                    <a className="block w-full py-[15px] px-5 font-bold text-slate-333">تنظیمات حساب</a>
                </Link>
            </li>
            <li className="border-t border-gray-300">
                <Link href="#">
                    <a className="block w-full py-[15px] px-5 font-bold text-slate-333">خروج</a>
                </Link>
            </li>
        </ul>
    );
}

export default UserProfile;