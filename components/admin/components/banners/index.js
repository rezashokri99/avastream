import React, { useState } from "react";
import { Badge, Button, Space, Table, Modal, Divider } from "antd";
import useSWR from "swr";
import axios from "axios";
import { toast } from "react-toastify";
import ChangeBannersDataModal from "./ChangeBannerData";
import moment from "moment-jalaali"


const BannersListAdminComponent = () => {

  const [pageSize, setPageSize] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [count, setCount] = useState(0);
  const [tableData, setTableData] = useState()


  const { error } = useSWR("/api/admin/banners", (url) =>
    axios
      .get(url, { params: { pageSize, page: activePage } })
      .then((res) => {
        console.log(res.data);
        setTableData(res.data.banners);
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
      title: "نام بنر فیلم",
      dataIndex: "film",
      key: "film",
      render: (text) => <a>{text.name}</a>,
    },
    {
      title: "تاریخ ساخت",
      dataIndex: "created",
      key: "created",
      render: (date) => <p>{moment(date).format("HH:mm:ss jYYYY/jM/jD")}</p>
    },
    {
      title: "وضعیت نمایش",
      dataIndex: "show",
      key: "show",
      render: (text) => text ? <p className="text-green-600">منتشر شده</p> : <p className="text-red-orginal">منتشر نشده</p>
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
              title: `تغییر اطلاعات  ${record.film.name}`,
              content: <ChangeBannersDataModal bannerData={record} />,
              style: { direction: "rtl" },
              okText: "لغو",
              okType: "danger",

            })}>تغییر</Button>

          <Divider type="vertical" />

          <Button
            // danger
            type="text"
            style={{ color: "red" }}
            onClick={() => Modal.confirm({
              title: `حذف فیلم  ${record.name}`,
              content: <p>اگر از حذف فیلم اطمینان دارید روی حذف کلیک کنید.</p>,
              style: { direction: "rtl", display: "flex", alignItems: "center", justifyContent: "center" },
              okText: "حذف",
              okType: "danger",
              cancelText: "لغو",
              cancelButtonProps: "primary",
              okButtonProps: { className: "mr-3" },
              onOk: () => {
                axios.delete("/api/admin/films/update", { params: { id: record._id } })
                  .then((res) => {
                    if (res.data.deletedFilm._id) {
                      toast.warning("فیلم مورد نظر با موفقیت حذف شد!")
                    }
                  })
                  .catch(err => {
                    toast.error("مشکلی رخ داده است!")
                  })
              }

            })}>حذف</Button>
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

export default BannersListAdminComponent;
