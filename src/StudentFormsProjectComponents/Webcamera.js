// src/Webcam.js
/*import React, { useRef, useState, useEffect } from 'react';
import './Webcamera.css'

function Webcam() {
  
  const webRef = useRef(null)
  let videoRef = useRef(null)
  let photoRef = useRef(null)
  const [getImagebool, setImagebool] = useState(true)

  const getUserCamera = () => {
    navigator.mediaDevices.getUserMedia({
      video: true
    })
      .then((stream) => {
        let video = videoRef.current
        video.srcObject = stream
        video.play()
      })
      .catch((error) => {
        console.log(error);
      })
  }


  const takepic = () => {
    let width = 200
    let height = 150
    let photo = photoRef.current
    let video = videoRef.current
    photo.width = width
    photo.height = height
    let ctx = photo.getContext('2d')
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
    setImagebool(true)
  }

  const retakepic = () => {
    let photo = photoRef.current
    let ctx = photo.getContext('2d')
    ctx.clearRect(0, 0, photo.width, photo.height);
  }

  useEffect(() => {
    getUserCamera()
  }, [videoRef])

  return (
    <div>
      <h1 className='text-center'>Take photo</h1>
      {getImagebool && <div className='video-main-container'>
        <video className='video-container' ref={videoRef}></video>
        <div className='icons-container'>
          <i className="fa-solid fa-camera-retro icons" onClick={takepic}></i>
          <i className="fa-solid fa-trash icons"></i>
          <i className="fa-solid fa-rotate-right icons" onClick={retakepic}></i>
        </div>
      </div>}
      {!getImagebool && <div className='photo-main-container'>
        <canvas className='photo-container' ref={photoRef}></canvas>
        <div className='icons-container'>
          <i className="fa-solid fa-camera-retro icons" onClick={takepic}></i>
          <i className="fa-solid fa-trash icons"></i>
          <i className="fa-solid fa-rotate-right icons" onClick={retakepic}></i>
        </div>
      </div>}
    </div>
  )
}

export default Webcam;*/

import React, { useRef, useState, useEffect } from 'react';
import './Webcamera.css'

const Webcamera = () => {
  const [imageURL, setImageURL] = useState(null);
  const [getBool, setBool] = useState(true)
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const getInitialvideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch(err => {
        console.error('Error accessing webcam: ', err);
      });

    // Clean up on component unmount
    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
      }
    };
  }

  useEffect(() => {
    // Access the webcam
    getInitialvideo()
  }, []);

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL = canvas.toDataURL('image/png');
      setImageURL(dataURL);
      setBool(false)
    }
  };

  const recaptureImage = () => {
    setBool(true)
    getInitialvideo()
  }

  return (
    <div>
      {getBool ? (<div>
        <video ref={videoRef} className='webcamlengthandheight' autoPlay></video>
        <div className='icon-container'>
          <i className="fa-solid fa-camera-retro icons" onClick={captureImage}></i>
        </div>
      </div>) :
        (<div>
          <img src={imageURL} className='webcamlengthandheight' alt="Captured" />
          <div className='icon-container'>
            <i className="fa-solid fa-rotate-right icons" onClick={recaptureImage}></i>
          </div>
        </div>)}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default Webcamera;

