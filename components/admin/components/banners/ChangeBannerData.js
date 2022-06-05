import React from "react";
import { Form, Input, Button, InputNumber, Upload, Switch } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import UploadComponent from "../../../upload/index";
import moment from "moment-jalaali";
import styles from "./changeBannerData.module.css";
import SearchFilm from "../../../search-films/search-film";

const ChangeBannersDataModal = ({ bannerData }) => {
  const [form] = Form.useForm();

  return (
    <div className="w-full rtl text-right">
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          console.log({...values, bannerId: bannerData._id});
          axios.put("/api/admin/banners/update", {
            values: { ...values, bannerId: bannerData._id },
          })
            .then((res) => {
              // console.log(res);
              // if (res.data._id) {
                console.log(res);

                toast.success("تغییرات با موفقیت اعمال شد!");
              // } else {
                // toast.error("اطلاعات تغییر یافته ثبت نشد!")
              // }
            })
            .catch((err) => {
              //   console.log(err)
              toast.error("مشکلی رخ داده است!");
            });
        }}
        onFinishFailed={(err) => toast.error("لطفا مقادیر را به درستی وارد کنید!")}
        initialValues={{
          // //////////////////////////////////////////
          film: bannerData.film._id,
          // ////////////////////////////////////////// bannerData.film._id
          banner: bannerData.banner,
          show: bannerData.show,
        }}
      >
        <Form.Item
          label=" فیلم"
          name="film"
          rules={[{ required: true, message: " فیلم را وارد کنید!" }]}
        >
          <SearchFilm initialValue={bannerData.film} getFilmID={film => form.setFieldsValue({film})} />
        </Form.Item>

        <Form.Item
          className={`${styles.uploadLable} flex items-center justify-center `}
          label="بارگذاری بنر فیلم"
          name="banner"
          rules={[{ required: true, message: "پوستر بنر را بارگذاری کنید!" }]}
        >
          <UploadComponent key="banner" img={true} afterUpload={value => form.setFieldsValue({ poster: value[0]._id })} />
        </Form.Item>

        <Form.Item
          className={`${styles.uploadLable} flex items-center justify-center `}
          label="وضعیت نمایش بنر"
          name="show"
          valuePropName="checked"
        >
          <Switch onChange={(value) => form.setFieldsValue({ show: value })} />
        </Form.Item>


        <Form.Item className="text-center">
          <Button className="w-full" htmlType="submit">تغییر اطلاعات</Button>
        </Form.Item>

      </Form>
    </div>
  );
};

export default ChangeBannersDataModal;
