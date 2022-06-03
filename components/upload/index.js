import React from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { toast } from "react-toastify";

export default class UploadComponent extends React.Component {
  state = {
    fileList: [],
    uploading: false,
    uploadedMedia: false
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('media', file);
    });

    this.setState({
      uploading: true,
    });

    axios({
      url: "/upload",
      method: "post",
      data: formData
    }).then(res => {
      toast.success("فایل مورد نظر با موفقیت بارگزاری شد!")
      this.props.afterUpload(res.data)
      this.setState({
        uploading: false,
        uploadedMedia: true
      });;
    }).catch(err => console.log(err))

  };

  render() {
    const { uploading, fileList, uploadedMedia } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        if(this.props.img && this.props.img === true){
          if(file.type === 'image/png' || file.type === 'image/jpeg'){
            this.setState((state) => ({
              fileList: [...state.fileList, file],
            }));
            return false;
  
          }else{
            toast.error("فرمت عکس وارد شده قابل قبول نیست!")
          }
        }else{
          if(file.type === 'video/mp4'){
            this.setState((state) => ({
              fileList: [...state.fileList, file],
            }));
            return false;
  
          }else{
            toast.error("فرمت ویدیو وارد شده قابل قبول نیست!")
          }
        }
      },
      fileList,
    };

    return (
      <>
        <Upload className='text-white flex flex-col items-center justify-center' {...props}>
          <Button className='text-white' icon={<UploadOutlined />}>انتخاب فایل</Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0 || fileList.length > 1 || uploadedMedia === true}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'در حال بارگزاری' : 'شروع بارگزاری'}
        </Button>
      </>
    );
  }
}

// #40a9ff
