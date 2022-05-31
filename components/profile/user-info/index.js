/* eslint-disable @next/next/no-img-element */
const UserInfo = () => {
    return (
        <div className="rtl text-right md:grid md:grid-cols-5 justify-center">
            <div className="flex items-center justify-center mb-8 md:col-span-1 md:w-32">
                <img src="/assets/images/avatar/user.jpg" alt="userImage" />
            </div>
            <div className="text-white pb-4 md:col-span-4">
                <p className="mb-2">Username</p>
                <p className="mb-2">تاریخ ایجاد حساب</p>
                <p>اشتراک</p>
            </div>
        </div>
    );
}
 
export default UserInfo;