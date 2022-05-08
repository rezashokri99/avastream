/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const MobileHeaderLogo = () => {
    return (
        <div className="lg:hidden z-10 w-full h-[110px] md:h-20 bg-gray-dark flex justify-center items-center">
            <Link href="#" className="w-fit h-fit">
                <img src="/assets/images/header-logo.png" alt="header-logo" />
            </Link>
        </div>
    );
}
 
export default MobileHeaderLogo;