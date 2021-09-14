import React from 'react'
import image from '../image.svg'
import './Uploader.css'

const Uploader = ({ getRootProps, getInputProps, uploadImage }) => {
  return (
    <div className='square'>
      <div className='title'>Upload your image</div>
      <div className='subtitle'>File should be Jpeg Png...</div>
      <div {...getRootProps()} className='image-border'>
        <input {...getInputProps()} onChange={uploadImage} />
        <img src={image} alt='' />
        <p>Drag & Drop your image here</p>
      </div>
      <p>Or</p>
      <label htmlFor='file' className='choose-file'>
        Chose a file
      </label>
      <div {...getRootProps()}>
        <input id='file' {...getInputProps()} onChange={uploadImage} />
      </div>
    </div>
  )
}

export default Uploader
