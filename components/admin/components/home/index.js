import { Card } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./homeAdminComponent.module.css";
import useSWR from "swr";
import axios from "axios";



const HomeAdminComponent = () => {

    const { data, error } = useSWR("/api/admin/home/count", axios)
    if (error) {
        toast.error("دریافت اطلاعات با مشکل مواجه شد!")
        return <div className="text-white">مشکلی رخ داده است!</div>
    }
    if (!data) {
        return <div className="text-white">درحال بارگذاری...</div>
    }

    return (
        <div className={`${styles.site_card_border_less_wrapper} text-center rtl grid grid-cols-4 gap-y-4 md:gap-y-0 md:gap-x-2 xl:gap-x-6 items-center justify-center`}>
            <Card className="col-span-4 md:col-span-2 xl:col-span-1" title="تعداد کاربران" bordered={false} style={{ backgroundColor: "#198754", width: "100%", height: "200px", borderRadius: "7px" }}>
                <div className="flex items-center justify-center">
                    <h2 className="mt-4 text-2xl font-bold w-36 border-b pb-1 text-white">{data.data.users} کاربر</h2>
                </div>
            </Card>

            <Card className="col-span-4 md:col-span-2 xl:col-span-1" title="تعداد فیلم ها" bordered={false} style={{ backgroundColor: "#dc3545", width: "100%", height: "200px", borderRadius: "7px" }}>
                <div className="flex items-center justify-center">
                    <h2 className="mt-4 text-2xl font-bold w-36 border-b pb-1 text-white">{data.data.films} فیلم</h2>
                </div>
            </Card>

            <Card className="col-span-4 md:col-span-2 xl:col-span-1" title="در حال بروزرسانی..." bordered={false} style={{ backgroundColor: "#adb5bd", width: "100%", height: "200px", borderRadius: "7px" }}>
                <div className="flex items-center justify-center">
                    <h2 className="mt-4 text-2xl font-bold w-36 border-b pb-1 text-white">...</h2>
                </div>
            </Card>

            <Card className="col-span-4 md:col-span-2 xl:col-span-1" title="درحال بروز رسانی..." bordered={false} style={{ backgroundColor: "#6610f2", width: "100%", height: "200px", borderRadius: "7px" }}>
                <div className="flex items-center justify-center">
                    <h2 className="mt-4 text-2xl font-bold w-36 border-b pb-1 text-white">...</h2>
                </div>
            </Card>
        </div>
    );
}

export default HomeAdminComponent;