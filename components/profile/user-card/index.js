import { AuthContext } from "../../../store/auth";
import { useContext } from "react";
import moment from "moment-jalaali";
import Link from "next/link";


/* eslint-disable @next/next/no-img-element */
const UserCard = () => {

    const { authState } = useContext(AuthContext);

    return (
        <div className="rtl text-right md:grid md:grid-cols-5 lg:grid-cols-6 justify-center">
            <div className="flex justify-center items-center h-full mb-8 md:col-span-1 md:w-32">
                <img src="/assets/images/avatar/user.jpg" alt="userImage" />
            </div>
            <div className="text-white pb-4 md:col-span-2 lg:col-span-3 flex flex-col justify-center">
                <p className="text-lg mb-2">نام کاربری :  {authState.user?.username}</p>
                <p className="text-lg mb-2">تاریخ ایجاد حساب : {moment(authState.user?.created).format('jYYYY/jM/jD')}</p>
                <p className="text-lg">
                    اشتراک : <span className={`${authState.user ? authState.user.sub === true ? "text-green-600" : "text-red-orginal" : ""}`}>
                        {authState.user ? authState.user.sub === true ? "دارد" : "ندارد" : ""}
                    </span>
                </p>
            </div>
            {
                authState.user?.role === "admin" ?
                    <div className="text-white md:col-span-2 lg:col-span-2 flex flex-col md:pt-5">
                        <h5 className="text-xl font-bold pb-2 mb-3 border-b text-white text-center">دسترسی مدیر</h5>

                        <div className="flex justify-around">
                            <Link href="/panel">
                                <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer font-bold ">پنل ادمین</a>
                            </Link>

                            <Link href="#">
                                <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer font-bold ">...</a>
                            </Link>

                            <Link href="#">
                                <a className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer font-bold ">...</a>
                            </Link>
                        </div>
                    </div> :
                    ""
            }

        </div>
    );
}

export default UserCard;