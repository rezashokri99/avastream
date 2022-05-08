/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



const MainFooter = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 py-[100px] mx-[15px] rtl text-right">
            {/* head footer */}
            <div className="mb-[30px] flex flex-col items-center md:items-start text-center">
                {/* لوگو */}
                <div>
                    <Link href="#">
                        <img className="mb-[15px]" src="/assets/images/footer-logo.png" alt="logo" />
                    </Link>
                </div>
                {/* توضیح */}
                <div className="mb-[15px]">
                    <p className="text-gray-clean text-xs">در اینجا آدرس کامل دفتر ثبت شده است.</p>
                </div>
                {/* بخش سوشيال ميديا ها */}
                <ul className="text-white flex justify-center items-center gap-x-2">
                    <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer text-lg"><FaTwitter /></li>
                    <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer text-lg"><FaFacebookF /></li>
                    <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer text-xl"><FaInstagram /></li>
                    <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer text-xl"><FaYoutube /></li>
                </ul>
            </div>

            {/* main Footer */}
            <div className="col-span-2 ">
                <div className="rtl text-right grid grid-cols-1 md:grid-cols-3 text-white">
                    
                    {/* ژانر */}
                    <div className="mb-6">
                        <h2 className="mb-4 font-bold">ژانر نمایش</h2>
                        <ul>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">اکشن</li>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">کمدی</li>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">درام</li>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">وحشتناک</li>
                        </ul>
                    </div>
                    
                    {/* سال تولید */}
                    <div className="mb-6">
                        <h2 className="mb-4 font-bold">سال تولید</h2>
                        <ul>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">سال 2018</li>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">سال 2019</li>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">سال 2020</li>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">سال 2021</li>
                        </ul>
                    </div>

                    {/* کیفیت نمایش */}
                    <div>
                        <h2 className="mb-4 font-bold">کیفیت نمایش</h2>
                        <ul>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">720p</li>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">1080p</li>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">720p</li>
                            <li className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer mt-2 text-sm font-light">1080p</li>
                        </ul>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default MainFooter;