import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined
  } from "@ant-design/icons";
import CreateBannerPage from "../components/create-banner";
import CreateMediaPage from "../components/create-film";
import FilmsListAdminComponent from "../components/films";
import HomeAdminComponent from "../components/home";
import UserListAdminComponent from "../components/users";

const pages = [
    {name: "صفحه اصلی", key: "home", icon: <HomeOutlined />, component: <HomeAdminComponent />},
    {name: "لیست کاربران", key: "users", icon: <UserOutlined />, component: <UserListAdminComponent />},
    {name: "لیست فیلم ها", key: "films", icon: <VideoCameraOutlined />, component: <FilmsListAdminComponent />},
    {name: "لیست بنر ها", key: "banners", icon: <VideoCameraOutlined />, component: <FilmsListAdminComponent />},
    {name: "لیست اسلایدر ها", key: "sliders", icon: <VideoCameraOutlined />, component: <FilmsListAdminComponent />},
    {name: "ایجاد فیلم جدید", key: "create-film", icon: <UploadOutlined />, component: <CreateMediaPage />},
    {name: "ایجاد بنر جدید", key: "create-banner", icon: <UploadOutlined />, component: <CreateBannerPage />},
    {name: "ایجاد اسلایدر جدید", key: "create-slider", icon: <UploadOutlined />, component: <CreateMediaPage />},
]

export default pages;