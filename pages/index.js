import Main from "../components/main";

export default function Home() {

  return (
    <div>

      {/* main container */}
      <Main />

    </div>
  )
}

export const getServerSideProps = async (context) => {

  return {
    props: {
      
    }
  }

}