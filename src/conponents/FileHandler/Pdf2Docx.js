import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import config from '../../api/config'
const { Dragger } = Upload;
const props = {
    name: 'file_pdf2docx',
    accept:'.pdf',
    multiple: true,
    action: `${config.apiUrl}/fileshandler/pdf2docx`,
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} 文件上传成功.`);
            // 成功后创建下载链接
            console.log("info",info.file.response)

        } else if (status === 'error') {
            message.error(`${info.file.name} 文件上传失败.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const Pdf2Docx = () => (
    <Dragger {...props}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">单击或拖动PDF文件到此区域</p>
        <p className="ant-upload-hint">
            支持单个或批量上传。严禁上传公司数据或其他被禁文件。
        </p>
    </Dragger>
);
export default Pdf2Docx;