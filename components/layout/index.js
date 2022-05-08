import HeaderContainer from "./header/headerContainer";
import Footer from "./footer"


const Layout = ({ children }) => {
    return (
        <div>
            {/* header container */}
            <HeaderContainer />
            {children}
            {/* footer container */}
            <Footer />
        </div>
    );
}

export default Layout;