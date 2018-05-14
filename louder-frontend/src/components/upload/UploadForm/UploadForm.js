import React from 'react';
import styles from './UploadForm.scss';
import classNames from 'classnames/bind';
import axios from 'axios';

const cx = classNames.bind(styles);

const UploadForm = () => {
  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('songFiles', file);
    axios.post(`/api/songs/`, fd);
  }
  return (
    <div>
      <input
        type="file"
        id="uploader"
        name="songFiles"
        onChange={uploadFile}
        multiple/>
    </div>
  );
}

export default UploadForm;