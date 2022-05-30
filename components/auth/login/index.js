/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "./login.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../store/auth";
import { useRouter } from "next/router";


const LoginForm = () => {

    const { setAuthNewState } = useContext(AuthContext);
    const router = useRouter();

    // استیت مقادیر ورودی ها
    const [inputData, setInputData] = useState({
        username: "",
        password: "",
    })

    // استیت اعتبارسنجی
    const [invalidate, setInvalidate] = useState({
        username: {
            notEmpty: false,
            lessThanFiveLetters: false,
            notEnglish: false,
            isOkey: false
        },
        password: {
            notEmpty: false,
            lessThanSixLetters: false,
            isOkey: false
        },
    })

    // هندلر تایپ در اینپوت ها
    const changeInputValueHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputData({
            ...inputData,
            [name]: value
        })
    }

    // هندلر دکمه ثبت نام
    const submitHandler = (e) => {
        e.preventDefault();


        if (inputData.username === "" || inputData.password === "") {
            toast.error("مقادیر وارد شده معتبر نمی باشند",)

        } else if (invalidate.username.lessThanFiveLetters === true || invalidate.username.notEnglish === true || invalidate.password.lessThanSixLetters === true) {
            toast.error("مقادیر وارد شده معتبر نمی باشند")
        } else {

            axios.post("/api/auth/login", inputData)
                .then(res => {
                    axios.get("/api/auth/user")
                        .then((res) => {
                            if (res.data.token) {
                                setAuthNewState({ token: res.data.token })
                                toast.success("شما با موفقیت وارد شدید!");
                                setInputData({
                                    username: "",
                                    password: ""
                                })
                                router.push("/")
                            }
                        })
                        .catch((err) => console.log(err))
                })
                .catch((err) => {
                    if (err.response) {
                        toast.error(err.response.data.error)
                    } else {
                        toast.error("مشکلی رخ داده است!")
                    }
                })
        }

    }

    // اعتبارسنجی نام کاربری
    const usernameValidateHandler = (e) => {
        let value = e.target.value;

        if (value === "") {
            setInvalidate({
                ...invalidate,
                username: {
                    lessThanFiveLetters: false,
                    notEnglish: false,
                    notEmpty: true,
                    isOkey: false
                }
            })
        } else if (value.length < 5) {
            setInvalidate({
                ...invalidate,
                username: {
                    notEnglish: false,
                    notEmpty: false,
                    lessThanFiveLetters: true,
                    isOkey: false
                }
            })
        } else {
            setInvalidate({
                ...invalidate,
                username: {
                    notEnglish: false,
                    notEmpty: false,
                    lessThanFiveLetters: false,
                    isOkey: true
                }
            })
        }
        // شرط نبودن کلمات فارسی در نام کاربری

        // else if(value.length) {
        //     setInvalidate({
        //         ...invalidate,
        //         username: {
        //             ...inputData.username,
        //             lessThanFiveLetters: "true"
        //         }
        //     })
        // }

    }

    // اعتبارسنجی رمز عبور
    const passwordValidateHandler = (e) => {
        let value = e.target.value;

        if (value === "") {
            setInvalidate({
                ...invalidate,
                password: {
                    notEmpty: true,
                    lessThanSixLetters: false,
                    isOkey: false
                }
            })
        } else if (value.length < 6) {
            setInvalidate({
                ...invalidate,
                password: {
                    lessThanSixLetters: true,
                    notEmpty: false,
                    isOkey: false
                }
            })
        } else {
            setInvalidate({
                ...invalidate,
                password: {
                    lessThanSixLetters: false,
                    notEmpty: false,
                    isOkey: true
                }
            })
        }
    }


    return (
        <div className="mx-[15px] py-[50px] sm:w-[540px] sm:mx-auto md:w-[720px] lg:w-[960px] xl:w-[1140px] grid lg:grid-cols-2 justify-center  text-white text-right rtl">
            <div className="mb-[50px] lg:col-span-2">
                <h2 className="mb-6 text-[32px] font-bold text-center">خوش برگشتی !</h2>
                <p className="text-sm mb-4 text-center font-light">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            </div>

            <form onSubmit={submitHandler} className="mb-5 lg:col-span-1 lg:mt-4">

                {/* نام کاربری */}
                <div className="mb-4 flex flex-col">
                    <label className="mb-2">نام کاربری</label>
                    <input onBlur={usernameValidateHandler} onChange={changeInputValueHandler} value={inputData.username} name="username" className={`${invalidate.username.notEmpty === true || invalidate.username.lessThanFiveLetters === true || invalidate.username.notEnglish === true ? "border-red-600" : invalidate.username.isOkey ? "border-sky-500" : "border-gray-border"} focus:bg-white focus:border-red-orginal text-gray-text text-sm font-medium py-[5px] text-left px-5 h-[50px] bg-transparent outline-none border `} type="text" />
                    <span className="text-red-600 text-sm">{invalidate.username.notEmpty === true ? "فیلد نام کاربری نباید خالی باشد." : invalidate.username.lessThanFiveLetters === true ? "تعداد کلمات نام کاربری نباید از پنج حرف کمتر باشه" : invalidate.username.notEnglish === true ? "نام کاربری باید حروف انگلیسی باشد" : ""}</span>
                </div>
                {/* پسورد */}
                <div className="mb-7 flex flex-col">
                    <label className="mb-2">رمز عبور</label>
                    <input onBlur={passwordValidateHandler} onChange={changeInputValueHandler} value={inputData.password} name="password" className={`${invalidate.password.notEmpty === true || invalidate.password.lessThanSixLetters === true ? "border-red-600" : invalidate.password.isOkey ? "border-sky-500" : "border-gray-border"} focus:bg-white focus:border-red-orginal text-gray-text text-sm font-medium py-[5px] text-left px-5 h-[50px] bg-transparent outline-none border `} type="password" />
                    <span className="text-red-600 text-sm">{invalidate.password.notEmpty === true ? "فیلد رمز عبور نباید خالی باشد." : invalidate.password.lessThanSixLetters === true ? "تعداد کلمات رمز عبور نباید از شش حرف کمتر باشه" : ""}</span>
                </div>

                <div className="mb-4">
                    <button type="submit" className={`${styles.btnHover} w-full py-[10px] px-5 md:px-[30px] h-[50px] bg-red-orginal text-white flex justify-center text-xl cursor-pointer `}>
                        <p className="z-10 flex items-center">
                            ورود
                        </p>
                    </button>
                </div>

                <div>
                    <p className="text-xs font-medium text-center cursor-default">
                        حساب کاربری ندارید؟
                        <Link href="/auth/signup">
                            <span className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer"> اینجا ثبت نام کنید!</span>
                        </Link>
                    </p>
                </div>

            </form>

            <div className="lg:col-span-1">
                <img className="block lg:w-[450px] xl:w-[540px]" src="/assets/images/login.png" alt="photo" />
            </div>

        </div>
    );
}

export default LoginForm;