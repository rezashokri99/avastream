import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../../../../store/auth";
import styles from "./userProfile.module.css";
import axios from "axios";
import { toast } from "react-toastify";


const UserProfile = ({ isOpenUserProfile, setIsOpenUserProfile }) => {

    const { setAuthNewState, isAuthenticated } = useContext(AuthContext);

    const logoutHandler = () => {
        setIsOpenUserProfile(false)
        axios.get("/api/auth/logout")
            .then((res) => {
                setAuthNewState({})
                toast.warning("شما از حساب کاربری خود خارج شدید!")
            })
            .catch((err) => console.log(err))
    }

    return (
        <ul className={`${isOpenUserProfile ? "h-42" : "h-0"} fixed top-[70px] z-30 w-56 rounded-sm transition-[height] ease-in duration-500 overflow-hidden rtl mx-[15px] bg-white`}>
            {
                isAuthenticated() ?
                    <>
                        <li className={`${styles.btnHover} border-gray-300`}>
                            <Link href="#">
                                <a onClick={() => setIsOpenUserProfile(false)} className={`${styles.textHover} block w-full py-[15px] px-5 font-bold text-slate-333`}>تنظیمات حساب</a>
                            </Link>
                        </li>
                        <li className={`${styles.btnHover} border-t border-gray-300`}>
                            <Link href="">
                                <a onClick={logoutHandler} className={`${styles.textHover} block w-full py-[15px] px-5 font-bold text-slate-333`}>خروج</a>
                            </Link>
                        </li>
                    </> :
                    <>
                        <li className={`${styles.btnHover} border-gray-300`}>
                            <Link href="/auth/login">
                                <a onClick={() => setIsOpenUserProfile(false)} className={`${styles.textHover} block w-full py-[15px] px-5 font-bold text-slate-333`}>ورود</a>
                            </Link>
                        </li>
                        <li className={`${styles.btnHover} border-t border-gray-300`}>
                            <Link href="/auth/signup">
                                <a onClick={() => setIsOpenUserProfile(false)} className={`${styles.textHover} block w-full py-[15px] px-5 font-bold text-slate-333`}>ثبت نام</a>
                            </Link>
                        </li>

                    </>

            }
        </ul>
    );
}

export default UserProfile;