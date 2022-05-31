import { AuthContext } from "../../../store/auth";
import { useContext } from "react";
import moment from "moment-jalaali";


/* eslint-disable @next/next/no-img-element */
const UserInfo = () => {

    const { authState } = useContext(AuthContext);

    return (
        <div className="rtl text-right md:grid md:grid-cols-4 lg:grid-cols-6 justify-center">
            <div className="flex justify-center items-center h-full mb-8 md:col-span-1 md:w-32">
                <img src="/assets/images/avatar/user.jpg" alt="userImage" />
            </div>
            <div className="text-white pb-4 md:col-span-3 lg:col-span-5 flex flex-col justify-center">
                <p className="text-lg mb-2">نام کاربری :  {authState.user?.username}</p>
                <p className="text-lg mb-2">تاریخ ایجاد حساب : {moment(authState.user?.created).format('jYYYY/jM/jD')}</p>
                <p className="text-lg">
                    اشتراک : <span className={`${authState.user? authState.user.sub === true ? "text-green-600" : "text-red-orginal" : ""}`}>
                    {authState.user? authState.user.sub === true ? "دارد" : "ندارد" : ""}
                    </span>
                </p>
            </div>
        </div>
    );
}
 
export default UserInfo;