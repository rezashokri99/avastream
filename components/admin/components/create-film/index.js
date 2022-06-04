import React from "react";
import { Button, Divider, Form, Input, InputNumber } from "antd";
import moment from "moment-jalaali";
import UploadComponent from "../../../upload";
import axios from "axios";
import styles from "./createFilm.module.css";
import { toast } from "react-toastify";
import Router from 'next/router';


const CreateMediaPage = () => {

  const [form] = Form.useForm()

  return (
    <div className="w-full h-full px-10 max-h-full overflow-scroll">
      <Divider className="border-t-gray-200 mt-4"><h2 className="text-4xl text-gray-200">ایجاد فیلم جدید</h2></Divider>
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          console.log(values);
          axios.post("/api/admin/films/create", { values })
            .then((res) => {
              if (res.data._id) {
                toast.success(`فیلم ${res.data.name} با موفقیت بارگزاری شد!`);
                form.resetFields();
              }
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
          label="عنوان فیلم"
          name="name"
          rules={[{ required: true, message: "نام فیلم را وارد کنید!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="توضیحات فیلم"
          name="content"
          rules={[
            { required: true, message: "توضیحات فیلم را وارد کنید!" },
            { min: 30, message: "توضیحات فیلم می بایست بیش از 30 حرف باشد!" },
            {
              max: 500,
              message: "توضیحات فیلم می بایست کمتر از 500 حرف باشد!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="امتیاز IMDB "
          name="score"
          rules={[
            { required: true, message: "امتیاز IMDB فیلم را وارد کنید!" },
          ]}
        >
          <InputNumber className="w-full" min={0} max={10} />
        </Form.Item>
        <Form.Item
          label="سال ساخت"
          name="created"
          rules={[{ required: true, message: "سال ساخت فیلم را وارد کنید!" }]}
        >
          <InputNumber
            className="w-full"
            min={1330}
            max={parseInt(moment(new Date()).format("jYYYY")) + 1}
          />
        </Form.Item>
        <Form.Item
          label="مدت زمان فیلم (دقیقه)"
          name="time"
          rules={[{ required: true, message: "مدت زمان فیلم را وارد کنید!" }]}
        >
          <InputNumber className="w-full" min={0} />
        </Form.Item>
        <Form.Item
          className={`${styles.uploadLable} flex items-center justify-center `}
          label="بارگذاری پوستر فیلم"
          name="poster"
          rules={[{ required: true, message: "پوستر فیلم را بارگذاری کنید!" }]}
        >
          <UploadComponent key="poster" img={true} afterUpload={value => form.setFieldsValue({ poster: value[0]._id })} />
        </Form.Item>
        <Form.Item
          className={`${styles.uploadLable} flex items-center justify-center `}
          label="بارگذاری فیلم"
          name="film"
          rules={[{ required: true, message: "فایل فیلم را بارگذاری کنید!" }]}
        >
          <UploadComponent key="film" afterUpload={value => form.setFieldsValue({ film: value[0]._id })} />
        </Form.Item>
        <Form.Item>
          <Button className="w-1/2 text-white" block htmlType="submit" size="large">
            ایجاد فیلم
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateMediaPage;
