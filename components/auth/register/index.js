/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";


const RegisterForm = () => {

    // استیت مقادیر ورودی ها
    const [inputData, setInputData] = useState({
        email: "",
        username: "",
        password: "",
        confirmpassword: ""
    })

    // استیت اعتبارسنجی
    const [invalidate, setInvalidate] = useState({
        email: {
            notEmpty: false,
            includeEmailValid: false,
            isOkey: false
        },
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
        confirmPassword: {
            notMatchWithPassword: false,
            notEmpty: false,
            lessThanSixLetters: false,
            isOkey: false
        },
    })

    // // استیت اوکی نبودن اینپوت ها موقع زدن دکمه ثبت نام
    // const [notOkey , setNotOkey] = useState(false);


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
        if (inputData.email === "" || inputData.username === "" || inputData.password === "" || inputData.confirmpassword === "") {
            toast.error("مقادیر وارد شده معتبر نمی باشند",)

        } else if (invalidate.email.includeEmailValid === true || invalidate.username.lessThanFiveLetters === true || invalidate.username.notEnglish === true || invalidate.password.lessThanSixLetters === true || invalidate.confirmPassword.lessThanSixLetters === true || invalidate.confirmPassword.notMatchWithPassword === true) {
            toast.error("مقادیر وارد شده معتبر نمی باشند")
        } else {

            axios.post("/api/auth/register", inputData)
                .then(res => {
                    console.log(res);
                    toast.success(`${inputData.username} .ثبت نام با موفقیت انجام شد`);
                    setInputData({
                        email: "",
                        username: "",
                        password: "",
                        confirmpassword: ""
                    })
                })
                .catch(err => {
                    if (err.response) {
                        toast.error(err.response.data.error)
                    } else {
                        toast.error("مشکلی رخ داده است!")
                    }
                })

        }
    }

    // اعتبارسنجی ایمیل
    const emailValidateHandler = (e) => {
        let value = e.target.value;

        if (value === "") {
            setInvalidate({
                ...invalidate,
                email: {
                    includeEmailValid: false,
                    notEmpty: true,
                    isOkey: false
                }
            })
        } else if (!value.includes("@")) {
            setInvalidate({
                ...invalidate,
                email: {
                    notEmpty: false,
                    includeEmailValid: true,
                    isOkey: false
                }
            })
        } else {
            setInvalidate({
                ...invalidate,
                email: {
                    notEmpty: false,
                    includeEmailValid: false,
                    isOkey: true
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
        } else if (value === inputData.confirmpassword) {
            setInvalidate({
                ...invalidate,
                confirmPassword: {
                    ...invalidate.confirmPassword,
                    isOkey: true,
                    notMatchWithPassword: false,
                },
                password: {
                    lessThanSixLetters: false,
                    notEmpty: false,
                    isOkey: true
                }
            })
        } else if (value !== inputData.confirmpassword) {
            setInvalidate({
                ...invalidate,
                confirmPassword: {
                    ...invalidate.confirmPassword,
                    notMatchWithPassword: true,
                },
                password: {
                    lessThanSixLetters: false,
                    notEmpty: false,
                    isOkey: true
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

    // اعتبارسنجی تکرار رمز عبور
    const confirmPasswordValidateHandler = (e) => {
        let value = e.target.value;

        if (value === "") {
            setInvalidate({
                ...invalidate,
                confirmPassword: {
                    notMatchWithPassword: false,
                    notEmpty: true,
                    lessThanSixLetters: false,
                    isOkey: false
                }
            })
        } else if (value.length < 6) {
            setInvalidate({
                ...invalidate,
                confirmPassword: {
                    notMatchWithPassword: false,
                    lessThanSixLetters: true,
                    notEmpty: false,
                    isOkey: false
                }
            })
        } else if (value !== inputData.password) {
            setInvalidate({
                ...invalidate,
                confirmPassword: {
                    notMatchWithPassword: true,
                    lessThanSixLetters: false,
                    notEmpty: false,
                    isOkey: false
                }
            })
        } else {
            setInvalidate({
                ...invalidate,
                confirmPassword: {
                    notMatchWithPassword: false,
                    lessThanSixLetters: false,
                    notEmpty: false,
                    isOkey: true
                }
            })
        }
    }

    return (
        <div className="mx-[15px] py-[50px] sm:w-[540px] sm:mx-auto md:w-[720px] lg:w-[960px] xl:w-[1140px] justify-center text-white text-right rtl">
            <div className="mb-[50px] lg:col-span-2">
                <h2 className="mb-6 text-[32px] font-bold text-center">یک حساب کاربری ایجاد کنید</h2>
                <p className="text-sm mb-4 text-center font-light">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            </div>

            <form onSubmit={submitHandler} className="mb-5 grid lg:grid-cols-2 lg:gap-x-8">

                {/* ایمیل */}
                <div className="mb-4 flex flex-col lg:col-span-1">
                    <label className="mb-2">پست الکترونیکی</label>
                    <input onBlur={emailValidateHandler} onChange={changeInputValueHandler} value={inputData.email} name="email" className={`${invalidate.email.notEmpty === true || invalidate.email.includeEmailValid === true ? "border-red-600" : invalidate.email.isOkey ? "border-sky-500" : "border-gray-border"} focus:bg-white focus:border-red-orginal text-gray-text text-sm font-medium py-[5px] text-left px-5 h-[50px] bg-transparent outline-none border  `} type="email" />
                    <span className="text-red-600 text-sm">{invalidate.email.notEmpty === true ? "فیلد ایمیل نباید خالی باشد." : invalidate.email.includeEmailValid === true ? "ایمیل معتبر نیست" : ""}</span>
                </div>
                {/* نام کاربری */}
                <div className="mb-4 flex flex-col lg:col-span-1">
                    <label className="mb-2">نام کاربری</label>
                    <input onBlur={usernameValidateHandler} onChange={changeInputValueHandler} value={inputData.username} name="username" className={`${invalidate.username.notEmpty === true || invalidate.username.lessThanFiveLetters === true || invalidate.username.notEnglish === true ? "border-red-600" : invalidate.username.isOkey ? "border-sky-500" : "border-gray-border"} focus:bg-white focus:border-red-orginal text-gray-text text-sm font-medium py-[5px] text-left px-5 h-[50px] bg-transparent outline-none border  `} type="text" />
                    <span className="text-red-600 text-sm">{invalidate.username.notEmpty === true ? "فیلد نام کاربری نباید خالی باشد." : invalidate.username.lessThanFiveLetters === true ? "تعداد کلمات نام کاربری نباید از پنج حرف کمتر باشه" : invalidate.username.notEnglish === true ? "نام کاربری باید حروف انگلیسی باشد" : ""}</span>
                </div>
                {/* پسورد */}
                <div onBlur={passwordValidateHandler} className="mb-7 flex flex-col lg:col-span-1">
                    <label className="mb-2">رمزعبور</label>
                    <input onChange={changeInputValueHandler} value={inputData.password} name="password" className={`${invalidate.password.notEmpty === true || invalidate.password.lessThanSixLetters === true ? "border-red-600" : invalidate.password.isOkey ? "border-sky-500" : "border-gray-border"} focus:bg-white focus:border-red-orginal text-gray-text text-sm font-medium py-[5px] text-left px-5 h-[50px] bg-transparent outline-none border  `} type="password" />
                    <span className="text-red-600 text-sm">{invalidate.password.notEmpty === true ? "فیلد رمز عبور نباید خالی باشد." : invalidate.password.lessThanSixLetters === true ? "تعداد کلمات رمز عبور نباید از شش حرف کمتر باشه" : ""}</span>
                </div>
                {/* تکرار پسورد */}
                <div className="mb-10 flex flex-col lg:col-span-1">
                    <label className="mb-2">تکرار رمز عبور</label>
                    <input onBlur={confirmPasswordValidateHandler} onChange={changeInputValueHandler} value={inputData.confirmpassword} name="confirmpassword" className={`${invalidate.confirmPassword.notEmpty === true || invalidate.confirmPassword.lessThanSixLetters === true || invalidate.confirmPassword.notMatchWithPassword === true ? "border-red-600" : invalidate.confirmPassword.isOkey ? "border-sky-500" : "border-gray-border"} focus:bg-white focus:border-red-orginal text-gray-text text-sm font-medium py-[5px] text-left px-5 h-[50px] bg-transparent outline-none border  `} type="password" />
                    <span className="text-red-600 text-sm">{invalidate.confirmPassword.notEmpty === true ? "فیلد تکرار رمز عبور نباید خالی باشد." : invalidate.confirmPassword.lessThanSixLetters === true ? "تعداد کلمات تکرار رمز عبور نباید از شش حرف کمتر باشه" : invalidate.confirmPassword.notMatchWithPassword === true ? "تکرار رمز عبور نباید با رمز عبور یکسان نیست." : ""}</span>
                </div>
                {/* {
                    notOkey && <span className="mb-2 text-red-600 text-sm text-center lg:col-span-2">مقادیر به درستی وارد نشده اند</span>
                } */}
                <div className="mb-4 lg:col-span-2">
                    <button type="submit" className="w-full py-[10px] px-5 h-[50px] bg-red-orginal flex items-center justify-center text-xl cursor-pointer ">ثبت نام</button>
                </div>

                <div className="lg:col-span-2">
                    <p className="text-xs font-medium text-center cursor-default">
                        حساب کاربری دارید؟
                        <Link href="/auth/login">
                            <span className="hover:text-red-orginal transition ease-in-out duration-200 cursor-pointer">از اینجا وارد شوید</span>
                        </Link>
                    </p>
                </div>

            </form>


        </div>
    );
}

export default RegisterForm;