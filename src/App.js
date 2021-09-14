import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './App.css'
import Image from './components/Image'
import Loader from './components/Loader'
import Uploader from './components/Uploader'

const App = () => {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    let files
    if (e.target === undefined) {
      files = e
    } else {
      files = e.target.files
    }
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'womo14')
    setLoading(true)
    try {
      const res = await fetch(
        '	https://api.cloudinary.com/v1_1/faculazcano/image/upload',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()

      setImage(file.secure_url)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: uploadImage
  })

  return (
    <div>
      {loading ? (
        <Loader />
      ) : image === '' ? (
        <Uploader
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          uploadImage={uploadImage}
        />
      ) : (
        <Image image={image} />
      )}
    </div>
  )
}

export default App
