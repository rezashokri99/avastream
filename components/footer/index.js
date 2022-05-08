import BackToTop from "./backToTop";
import Copyright from "./copyright";
import MainFooter from "./mainFooter";

const Footer = () => {
    return (
        <div className="md:px-10 lg:px-20">
            {/* main Footer */}
            <MainFooter />
            {/* copyright Footer */}
            <Copyright />
            {/* back to top btn */}
            <BackToTop />
        </div>
    );
}
 
export default Footer;