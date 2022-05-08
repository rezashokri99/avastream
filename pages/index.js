import Main from "../components/main";
import HeaderContainer from "../components/header/headerContainer";
import Footer from "../components/footer"

export default function Home() {
  
  return (
    <div>
      {/* header container */}
      <HeaderContainer />
      {/* main container */}
      <Main />
      {/* footer container */}
      <Footer />
    </div>
  )
}
