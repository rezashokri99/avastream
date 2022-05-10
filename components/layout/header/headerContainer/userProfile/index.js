import Link from "next/link";

const UserProfile = ({ isOpenUserProfile, setIsOpenUserProfile }) => {
    return (
        <ul className={`${isOpenUserProfile ? "h-42" : "h-0"} fixed top-[70px] z-30 w-56 rounded-sm transition-[height] ease-in duration-500 overflow-hidden rtl mx-[15px] bg-white`}>
            <li className="border-t border-gray-300">
                <Link href="#">
                    <a onClick={() => setIsOpenUserProfile(false)} className="block w-full py-[15px] px-5 font-bold text-slate-333">تنظیمات حساب</a>
                </Link>
            </li>
            <li className="border-t border-gray-300">
                <Link href="/auth/login">
                    <a onClick={() => setIsOpenUserProfile(false)} className="block w-full py-[15px] px-5 font-bold text-slate-333">ورود</a>
                </Link>
            </li>
            <li className="border-t border-gray-300">
                <Link href="/auth/signup">
                    <a onClick={() => setIsOpenUserProfile(false)} className="block w-full py-[15px] px-5 font-bold text-slate-333">ثبت نام</a>
                </Link>
            </li>
        </ul>
    );
}

export default UserProfile;