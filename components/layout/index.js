import HeaderContainer from "./header/headerContainer";
import Footer from "./footer"


const Layout = ({ children, customize }) => {
    
    if (customize) {
        return (
            <>
                {children}
            </>
        )
    }else {
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
}

export default Layout;