import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div>
      <div className='square'>
        <p className='loading'>Uploading...</p>
        <div className='linear-back'>
          <div className='linear-progress' />
        </div>
      </div>
    </div>
  )
}

export default Loader
