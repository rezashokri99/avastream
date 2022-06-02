import React from "react";
import { Form, Input, Button, Select, Switch } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
const { Option } = Select;
const ChangeUserDataModal = ({ userData }) => {

  return (
    <div className="rtl text-right">
      <Form
        layout="vertical"
        onFinish={(values) => {
          axios.post("/api/admin/users/update", { values, userId: userData._id })
            .then((res) => toast.success("تغییرات با موفقیت اعمال شد!"))
            .catch((err) => toast.error("مشکلی رخ داده است!"))
        }}
        onFinishFailed={(err) => toast.error("لطفا مقادیر را به درستی وارد کنید!")}
        initialValues={{ username: userData.username, role: userData.role, sub: userData.sub }}
      >
        <Form.Item
          name="username"
          label="نام کاربری"
          rules={[
            { required: true, message: "نام کاربری را وارد کنید!" },
            { min: 5, message: "نام کاربری باید بیش از 5 حرف باشد!" },
            {
              pattern: /^[A-Za-z][a-zA-Z0-9_-]+$/,
              message: "نام کاربری نباید شامل حروف غیر انگلیسی و معتبر باشد!",
            },
            {
              whitespace: true,
              message: "فاصله نامعتبر است!",
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item name="role" label="نقش کاربر">
          <Select
            placeholder="نقش کاربر را وارد کنید."

            allowClear
          >
            <Option value="admin">ادمین</Option>
            <Option value="user">کاربر عادی</Option>
          </Select>
        </Form.Item>
        <Form.Item name="sub" valuePropName="checked" label="وضعیت اشتراک">
          <Switch />
        </Form.Item>
        <Form.Item className="text-center">
          <Button htmlType="submit">تغییر اطلاعات</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangeUserDataModal;
