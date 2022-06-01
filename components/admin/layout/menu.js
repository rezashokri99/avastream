import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined
  } from "@ant-design/icons";
import HomeAdminComponent from "../components/home";
import UserListAdminComponent from "../components/users";

const pages = [
    {name: "صفحه اصلی", key: "home", icon: <HomeOutlined />, component: <HomeAdminComponent />},
    {name: "لیست کاربران", key: "users", icon: <UserOutlined />, component: <UserListAdminComponent />},
    {name: "لیست فیلم ها", key: "films", icon: <VideoCameraOutlined />, component: ""},
    {name: "ایجاد فیلم جدید", key: "create_media", icon: <UploadOutlined />, component: ""},
]

export default pages;