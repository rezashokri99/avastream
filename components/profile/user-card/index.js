import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../store/auth";
import styles from "./userCard.module.css";
import Router from 'next/router';

const UserCard = () => {

    const { authState, setAuthNewState } = useContext(AuthContext);


    // استیت مقادیر ورودی ها
    const [inputData, setInputData] = useState({
        username: "",
        past_password: "",
        password: ""
    })

    // استیت اعتبارسنجی
    const [invalidate, setInvalidate] = useState({
        password: {
            notEmpty: false,
            lessThanSixLetters: false,
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

    // اعتبارسنجی رمز عبور جدید
    const newPasswordValidateHandler = (e) => {
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

    // هندلر دکمه ثبت نام
    const submitHandler = (e) => {
        e.preventDefault();

        if (inputData.past_password === "" || inputData.password === "") {
            toast.error("مقادیر رمز عبورهای وارد شده معتبر نمی باشند")

        } else if (invalidate.password.lessThanSixLetters === true || invalidate.password.lessThanSixLetters === true) {
            toast.error("مقادیر وارد شده معتبر نمی باشند")
        } else {
            const values = { ...inputData, username: authState.user.username }

            axios.put("/api/user/update", { values })
                .then(res => {
                    setAuthNewState({ token: authState.token, user: res.data.user });
                    toast.success("اطلاعات وارد شده با موفقیت تغییر پیدا کرد!");
                    // //////////////////////
                    Router.push("/");
                    // //////////////////////
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


    return (
        <div className="rtl text-right text-white">
            <div>
                <h5 className="my-4 pb-4 text-xl font-bold border-b">اطلاعات کلی</h5>
                <div className="pb-4 lg:grid lg:grid-cols-2 justify-center gap-x-8">
                    {/* نام کاربری */}
                    <div className="mb-4 flex flex-col lg:col-span-1">
                        <label className="mb-2">نام کاربری</label>
                        <input disabled value="reza shokri" name="username" className={`border-gray-border focus:bg-white focus:border-red-orginal text-gray-text text-sm font-medium py-[5px] text-left px-5 h-[50px] bg-transparent outline-none border `} type="text" />
                    </div>
                    {/* ایمیل */}
                    <div className="flex flex-col lg:col-span-1">
                        <label className="mb-2">ایمیل</label>
                        <input disabled value="rezashokri131@gmail.com" name="username" className={`border-gray-border focus:bg-white focus:border-red-orginal text-gray-text text-sm font-medium py-[5px] text-left px-5 h-[50px] bg-transparent outline-none border `} type="text" />
                    </div>
                </div>
            </div>

            <form>
                <h5 className="my-4 pb-4 text-xl font-bold border-b">تغییر رمز عبور</h5>
                <div className="pb-4 lg:grid lg:grid-cols-2 justify-center gap-x-8">
                    {/* پسورد فعلی */}
                    <div className="mb-7 flex flex-col lg:col-span-1">
                        <label className="mb-2">رمز عبور فعلی</label>
                        <input onBlur={passwordValidateHandler} onChange={changeInputValueHandler} value={inputData.past_password} name="past_password" className={`${invalidate.password.notEmpty === true || invalidate.password.lessThanSixLetters === true ? "border-red-600" : invalidate.password.isOkey ? "border-sky-500" : "border-gray-border"} focus:bg-white focus:border-red-orginal text-gray-text text-sm font-medium py-[5px] text-left px-5 h-[50px] bg-transparent outline-none border`} type="password" />
                        <span className="text-red-600 text-sm">{invalidate.password.notEmpty === true ? "فیلد رمز عبور نباید خالی باشد." : invalidate.password.lessThanSixLetters === true ? "تعداد کلمات رمز عبور نباید از شش حرف کمتر باشه" : ""}</span>
                    </div>

                    {/* پسورد جدید */}
                    <div className="mb-7 flex flex-col lg:col-span-1">
                        <label className="mb-2">رمز عبور جدید</label>
                        <input onBlur={newPasswordValidateHandler} onChange={changeInputValueHandler} value={inputData.password} name="password" className={`${invalidate.password.notEmpty === true || invalidate.password.lessThanSixLetters === true ? "border-red-600" : invalidate.password.isOkey ? "border-sky-500" : "border-gray-border"} focus:bg-white focus:border-red-orginal text-gray-text text-sm font-medium py-[5px] text-left px-5 h-[50px] bg-transparent outline-none border`} type="password" />
                        <span className="text-red-600 text-sm">{invalidate.password.notEmpty === true ? "فیلد رمز عبور نباید خالی باشد." : invalidate.password.lessThanSixLetters === true ? "تعداد کلمات رمز عبور نباید از شش حرف کمتر باشه" : ""}</span>
                    </div>
                </div>
            </form>

            <div className="mb-4 flex">

                <button type="submit" onClick={submitHandler} className={`${styles.btnHover} w-20 py-[10px] px-5 md:px-[30px] h-[50px] bg-red-orginal text-white flex justify-center text-xl cursor-pointer `}>
                    <p className="z-10 flex items-center">
                        ذخیره
                    </p>
                </button>

                <button className={`${styles.btnHover} w-20 mr-4 py-[10px] px-5 md:px-[30px] h-[50px] bg-red-orginal text-white flex justify-center text-xl cursor-pointer `}>
                    <p className="z-10 flex items-center">
                        لغو
                    </p>
                </button>

            </div>

        </div>
    );
}

export default UserCard;