import React, { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth";

const Loader = ({isFirst, setIsFirst , setLoaderStatus}) => {
  
  const {isAuthenticated} = useContext(AuthContext)
  console.log(isAuthenticated());
  useEffect(() => {
    if (isAuthenticated() && isFirst) {
      setLoaderStatus(false)
      setIsFirst(false)
    }
  })
  return (
    <main>
      <div className="dank-ass-loader">
        <div className="row">
          <div className="arrow up outer outer-18"></div>
          <div className="arrow down outer outer-17"></div>
          <div className="arrow up outer outer-16"></div>
          <div className="arrow down outer outer-15"></div>
          <div className="arrow up outer outer-14"></div>
        </div>
        <div className="row">
          <div className="arrow up outer outer-1"></div>
          <div className="arrow down outer outer-2"></div>
          <div className="arrow up inner inner-6"></div>
          <div className="arrow down inner inner-5"></div>
          <div className="arrow up inner inner-4"></div>
          <div className="arrow down outer outer-13"></div>
          <div className="arrow up outer outer-12"></div>
        </div>
        <div className="row">
          <div className="arrow down outer outer-3"></div>
          <div className="arrow up outer outer-4"></div>
          <div className="arrow down inner inner-1"></div>
          <div className="arrow up inner inner-2"></div>
          <div className="arrow down inner inner-3"></div>
          <div className="arrow up outer outer-11"></div>
          <div className="arrow down outer outer-10"></div>
        </div>
        <div className="row mb-1">
          <div className="arrow down outer outer-5"></div>
          <div className="arrow up outer outer-6"></div>
          <div className="arrow down outer outer-7"></div>
          <div className="arrow up outer outer-8"></div>
          <div className="arrow down outer outer-9"></div>
        </div>
        {isFirst ? <p className="text-white text-right rtl mt-3 text-lg">به آوا استریم خوش آمدید!</p> : ''}
      </div>

    </main>
  );
};

export default Loader;
