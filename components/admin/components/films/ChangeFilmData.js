import React from "react";
import { Form, Input, Button, InputNumber, Upload, Select } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import UploadComponent from "../../../upload/index";
import moment from "moment-jalaali";
import styles from "./changeFilmData.module.css";
import categories from "../../../../util/categories.json";


const { Option } = Select;

const ChangeFilmsDataModal = ({ filmData }) => {

  const [form] = Form.useForm();
  
  return (
    <div className="w-full rtl text-right">
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          console.log(values);
          axios.put("/api/admin/films/update", { values: { ...values, filmId: filmData._id } })
            .then((res) => toast.success("تغییرات با موفقیت اعمال شد!"))
            .catch((err) => toast.error("مشکلی رخ داده است!"))
        }}
        onFinishFailed={(err) => toast.error("لطفا مقادیر را به درستی وارد کنید!")}
        initialValues={{
          name: filmData.name,
          content: filmData.content,
          imdb_score: filmData.imdb_score,
          date: filmData.date,
          time: filmData.time,
          poster: filmData.poster._id,
          video: filmData.video,
          category: filmData.category
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
          name="imdb_score"
          rules={[
            { required: true, message: "امتیاز IMDB فیلم را وارد کنید!" },
          ]}
        >
          <InputNumber className="w-full" min={0} max={10} />
        </Form.Item>
        <Form.Item
          label="سال ساخت"
          name="date"
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
          label="ژانر فیلم"
          name="category"
          rules={[{ required: true, message: "ژانر فیلم را وارد کنید!" }]}
        >
          <Select mode="tags">
            {
              categories.categories.map((category, index) => <Option key={index} value={category.value} >{category.text}</Option>)
            }
          </Select>
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
          name="video"
          rules={[{ required: true, message: "فایل فیلم را بارگذاری کنید!" }]}
        >
          <UploadComponent key="film" afterUpload={value => form.setFieldsValue({ video: value[0]._id })} />
        </Form.Item>

        <Form.Item className="text-center">
          <Button className="w-full" htmlType="submit">تغییر اطلاعات</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangeFilmsDataModal;
