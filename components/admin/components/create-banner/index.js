import React from "react";
import { Button, Divider, Form, Input, InputNumber, Switch } from "antd";
import moment from "moment-jalaali";
import UploadComponent from "../../../upload";
import axios from "axios";
import styles from "./create-banner.module.css";
import { toast } from "react-toastify";
import SearchFilm from "./search-film";


const CreateBannerPage = () => {

    const [form] = Form.useForm()

    return (
        <div className="w-full h-full px-10 max-h-full overflow-scroll">
            <Divider className="border-t-gray-200 mt-4"><h2 className="text-4xl text-gray-200">ایجاد بنر جدید</h2></Divider>
            <Form
                form={form}
                layout="vertical"
                initialValues={{show: false}}
                onFinish={(values) => {
                    console.log(values);
                    axios.post("/api/admin/films/banner", { values })
                        .then((res) => {
                            console.log(res);
                            // if (res.data._id) {
                                toast.success(`بنر با موفقیت ایجاد شد!`);
                                form.resetFields();
                            // }
                        })
                        .catch((err) => {
                            toast.error("مشکلی رخ داده است!");
                            console.log(err);
                        });
                }}
                onFinishFailed={err => {
                    console.log(err)
                }}
            >

                <Form.Item
                    className={`${styles.uploadLable} `}
                    label="انتخاب فیلم"
                    name="film"
                    rules={[{ required: true, message: "فیلم مورد نظر را انتخاب کنید!" }]}
                >
                    <SearchFilm getFilmId={id => form.setFieldsValue({film: id})} />
                </Form.Item>

                <Form.Item
                    className={`${styles.uploadLable} flex items-center justify-center `}
                    label="بارگذاری بنر جدید"
                    name="banner"
                    rules={[{ required: true, message: "بنر را بارگذاری کنید!" }]}
                >
                    <UploadComponent key="banner" img={true} afterUpload={value => form.setFieldsValue({ banner: value[0]._id })} />
                </Form.Item>

                <Form.Item
                    className={`${styles.uploadLable} flex items-center justify-center `}
                    label="وضعیت نمایش بنر"
                    name="show"
                >
                    <Switch onchange={value =>form.setFieldsValue({show: value})}/>
                </Form.Item>

                <Form.Item>
                    <Button className="w-1/2 text-white" block htmlType="submit" size="large">
                        ایجاد بنر
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default CreateBannerPage;
