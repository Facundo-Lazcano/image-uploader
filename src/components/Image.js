import React from 'react'
import { green } from '@material-ui/core/colors'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import './Image.css'

const Image = ({ image }) => {
  return (
    <div className='square'>
      <CheckCircleIcon style={{ color: green[500] }} className='check' />
      <div className='uploaded'>Uploaded Successfully!</div>
      <img className='image' src={image} alt='preview' />
      <div className='link'>
        <p>{image}</p>
        <div
          className='choose-file copy'
          onClick={() => {
            navigator.clipboard.writeText(image)
          }}
        >
          Copy Link
        </div>
      </div>
    </div>
  )
}

export default Image
