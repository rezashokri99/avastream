import React from "react";
import { Badge, Button, Space, Table } from "antd";
import useSWR from "swr";
import axios from "axios";
import { toast } from "react-toastify";

const UsersListAdminComponent = () => {

  const {data , error} = useSWR("/api/admin/users", axios)

  const columns = [
    {
      title: "نام کاربری",
      dataIndex: "username",
      key: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "پست الکترونیکی",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "نقش",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "وضعیت اشتراک",
      key: "sub",
      dataIndex: "sub",
      render: (sub, record, index) => {
        const text = sub === true ? "فعال" : "غیر فعال";
        const status = sub === true?"success":"error"
        return (
          <React.Fragment>
            <Badge status={status} />
            <span className="ml-2">{text}</span>
          </React.Fragment>
        );
      },
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="text">تغییر</Button>
        </Space>
      ),
    },
  ];

  if(error){
    toast.error("دریافت اطلاعات با مشکل مواجه شد!")
    return <div>مشکلی رخ داده است!</div>
  }
  if(!data){
    return <div>درحال بارگذاری...</div>
  }

  return (
    <div>
      <Table columns={columns} dataSource={data.data} />
    </div>
  );
};

export default UsersListAdminComponent;
