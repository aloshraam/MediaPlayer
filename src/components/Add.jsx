import React, { useState } from 'react'
import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI'





const Add = ({setAddResponseFromHome}) => {

  const [invalidYoutubeLink, setinvalidYoutubeLink] = useState(false)

  const [videoDetails, setVideoDetails] = useState({
    caption : "", imageUrl : "", youtubeLink : ""
  })

  console.log(videoDetails);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbedLinkFromYoutubeLink = (userInputYoutubeLink) =>{
    // steps for coverting youtubr link to embed code
    if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYoutubeLink.split("v=")[1].slice(0,11))

      const videoId = userInputYoutubeLink.split("v=")[1].slice(0,11)
      setinvalidYoutubeLink(false)
      setVideoDetails({...videoDetails,youtubeLink : `https://www.youtube.com/embed/${videoId}`})

    }
    else{
      setinvalidYoutubeLink(true)
      setVideoDetails({...videoDetails,youtubeLink : ""})
    }
  }

  const handleUploadVideo = async ()=>{
    // destructing the details
    const {caption, imageUrl, youtubeLink} = videoDetails
    if(caption && imageUrl && youtubeLink){
      try {
       const result =  await saveVideoAPI(videoDetails)
       if(result.status >= 200 && result.status < 300){
          alert("Video Added Succesfully")
          handleClose()
          // Pass the result to the view component
          setAddResponseFromHome(result)
       }else{
         console.log(result);
       }
      } catch (error) {
        console.log(error);
      }
    }
    else{
      alert("Please fill the form")
    }
  }

  return (
    <>
      <div className='d-flex align-items-center'>
          <h5>Upload New Video</h5>
          <button className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5' onClick={handleShow}> + </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border rounded'>
            <FloatingLabel controlId="floatingCaption" label="Video Caption">
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Url">
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="Video Url" />
            </FloatingLabel>

            <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Link">
              <Form.Control onChange={e=>extractingEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Link" />
            </FloatingLabel>
            {
              invalidYoutubeLink &&
              <div className='text-danger fw-bolder'>
                Invalid Youtube Link
              </div> 
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUploadVideo} >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add