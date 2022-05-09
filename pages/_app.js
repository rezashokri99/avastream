// global css
import '../styles/globals.css';
// tailwind css
import '../styles/tailwind.css';
// swiper css
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';import Layout from '../components/layout';
;


function MyApp({ Component, pageProps }) {
  return <Layout customize={pageProps.customize} ><Component {...pageProps} /></Layout>
}

export default MyApp
