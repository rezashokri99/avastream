import React, { useState } from "react";
import { Badge, Button, Space, Table, Modal } from "antd";
import useSWR from "swr";
import axios from "axios";
import { toast } from "react-toastify";
import ChangeFilmsDataModal from "./ChangeFilmData";


const FilmsListAdminComponent = () => {

  const [pageSize, setPageSize] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [count, setCount] = useState(0);
  const [tableData, setTableData] = useState()


  const { error } = useSWR("/api/admin/films", (url) =>
    axios
      .get(url, { params: { pageSize, page: activePage } })
      .then((res) => {
        console.log(res.data);
        setTableData(res.data.films);
        setCount(res.data.count);
      })
      .catch((err) => toast.error("دریافت اطلاعات با مشکل مواجه شده است!"))
  );

  const handlePaginationChange = ({ page, pageSize }) => {
    axios
      .get("/api/admin/films", { params: { pageSize, page } })
      .then((res) => {
        setTableData(res.data.films);
        setCount(res.data.count);
      })
      .catch((err) => toast.error("دریافت اطلاعات با مشکل مواجه شده است!"))
  }



  const columns = [
    {
      title: "نام فیلم",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "سال ساخت",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "امتیاز",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="text"
            style={{ color: "#40A9FF" }}
            onClick={() => Modal.info({
              title: `تغییر اطلاعات  ${record.name}`,
              content: <ChangeFilmsDataModal filmData={record} />,
              style: { direction: "rtl"},
              okText: "لغو",
              okType: "danger",
              onOk: () => console.log("object")

            })}>تغییر</Button>
        </Space>
      ),
    },
  ];

  if (error) {
    toast.error("دریافت اطلاعات با مشکل مواجه شد!")
    return <div className="text-white">مشکلی رخ داده است!</div>
  }
  if (!tableData) {
    return <div className="text-white">درحال بارگذاری...</div>
  }

  return (
    <div className="w-11/12 h-full bg-gray-dark pt-28 rtl">
      <Table
        // background color !!!!!!
        // background-color:  !important;
        pagination={{
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setActivePage(page)
            setPageSize(pageSize)
            handlePaginationChange({ page, pageSize })
          },
          total: count
        }} rowKey={record => record._id} columns={columns} dataSource={tableData} />
    </div>
  );
};

export default FilmsListAdminComponent;
