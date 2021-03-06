// global css
import '../styles/globals.css';
import 'antd/dist/antd.css';
// Loader Styles
import "../styles/loader.scss";
// tailwind css
import '../styles/tailwind.css';
// swiper css
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination'; import Layout from '../components/layout';
// react toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthContext, AuthProvider } from '../store/auth';
import { useState, useContext, useEffect } from 'react';
import Loader from '../util/loader';
import Router from 'next/router';
import axios from "axios";


// Axios Config :
axios.defaults.baseURL = "http://localhost:3000"


function MyApp({ Component, pageProps }) {
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [isFirst, setIsFirst] = useState(true);

  Router.onRouteChangeStart = () => {
    console.log('onRouteChangeStart Triggered');
    setLoaderStatus(true);
    setIsFirst(false);
  };

  Router.onRouteChangeComplete = () => {
    console.log('onRouteChangeComplete Triggered');
    setLoaderStatus(false);
    setIsFirst(false);
  };

  Router.onRouteChangeError = () => {
    console.log('onRouteChangeError Triggered');
  };


  return (
    <AuthProvider>
      <ToastContainer rtl theme='dark' />
      {
        loaderStatus ?
          <Loader isFirst={isFirst} setIsFirst={setIsFirst} setLoaderStatus={setLoaderStatus} /> :
          <Layout customize={pageProps.customize} >
            <Component {...pageProps} />
          </Layout>
      }
    </AuthProvider>
  )
}

export default MyApp
