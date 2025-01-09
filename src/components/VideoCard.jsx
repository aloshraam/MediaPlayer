import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import { deleteVideoAPI, saveHistoryAPI } from '../services/allAPI';



const VideoCard = ({displayData, setDeleteVideoResponseFromVideoCard, insideCategory}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = async () => {
    // Modal Show
    setShow(true)

    // store History in json
    const {caption, youtubeLink} = displayData
    const sysSaveTime = new Date
    const timeStamp = sysSaveTime.toLocaleString('en-us',{timeZoneName:'short'})
    const historyDetails = {caption, youtubeLink, timeStamp}
    try {
      await saveHistoryAPI(historyDetails)
    } catch (error) {
      console.log(error); 
    }

  }

  const removeVideo = async (id) => {
    try {
      const result = await deleteVideoAPI(id)
      setDeleteVideoResponseFromVideoCard(result)
    } catch (error) {
      console.log(error);
    }
  }

  const videocardDragStarted = (e, dragVideoDetails) =>{
    console.log("Inside the Drag",dragVideoDetails?.id);
    // share data using event drag start
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
  }


  return (
    <>
        <Card draggable={true} onDragStart={e=>videocardDragStarted(e,displayData)} className='' style={{ width: '250px', height: '250px'}} >
          <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.imageUrl} />
          <Card.Body>
            <Card.Text className='d-flex justify-content-between align-items-center'>
              {displayData?.caption}
              {
                !insideCategory&&
                <Button className='btn' onClick={()=>removeVideo(displayData?.id)}><i className="fa-solid fa-trash text-danger"></i></Button>
              }
            </Card.Text>
          </Card.Body>
        </Card>

        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{displayData.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <iframe width="100%" height="480" src={`${displayData?.youtubeLink}?autoplay=1`} title="La La Land (2016 Movie) Official Trailer – &#39;Dreamers&#39;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Modal.Body>
        </Modal>

    </>
  )
}

export default VideoCard