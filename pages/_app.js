// global css
import '../styles/globals.css';
// tailwind css
import '../styles/tailwind.css';
// swiper css
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination'; import Layout from '../components/layout';
// react toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function MyApp({ Component, pageProps }) {
  return (
    <Layout customize={pageProps.customize} >
      <ToastContainer rtl theme='dark' />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
