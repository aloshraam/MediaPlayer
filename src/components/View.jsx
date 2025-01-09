import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI, saveVideoAPI, updateCategoryAPI } from '../services/allAPI'


const View = ({addResponseFromHome, deleteResponseFromCategory, setDeleteResponseFromView}) => {
  const [allVideos, setAllVideos] = useState([])
  // delete video response from videoCard
  const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard] = useState("")

  useEffect(()=>{getAllVideos()},[addResponseFromHome, deleteVideoResponseFromVideoCard, deleteResponseFromCategory])

  console.log(allVideos)

  const getAllVideos = async ()=>{
    try {
      const result =  await getAllVideoAPI()
      console.log(result)
      if(result.status >= 200 && result.status < 300){
        setAllVideos(result.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const dragOverView = (e) =>{
    e.preventDefault()
  }

  const categoryDropOverViewCard = async (e) =>{
    const {video, categoryDetails} = JSON.parse(e.dataTransfer.getData("dragData"))

    // update the category by deleting the video using API
    const updatedCategoryVideoList = categoryDetails?.allVideos?.filter((item)=>{item.id !=video?.id})
    const updatedCategory = {...categoryDetails,allVideos : updatedCategoryVideoList}
    console.log(updatedCategory);

    //updating the category by deleting using API 
    const result = await updateCategoryAPI(updatedCategory)
    console.log(result);

    //use state lifting to communicate data
    setDeleteResponseFromView(result) // for refreshing the categoryComponent


    // update the videoCard using API
    await saveVideoAPI(video) //save or update the video to the videoCard using API call
    getAllVideos() //refresh the page using the function
  }

  return (
    <>
      <Row droppable='true' onDragOver={dragOverView} onDrop={e=>categoryDropOverViewCard(e)}>
        {
          allVideos?.length>0?
          allVideos?.map((video) =>(
            <Col key={video.id} sm={12} md={6} lg={4}>
              <VideoCard displayData ={video} setDeleteVideoResponseFromVideoCard = {setDeleteVideoResponseFromVideoCard}/>
            </Col>
          ))
          :
          <div className='fw-bolder text-danger fs-5'>No Videos Uploaded Yet!!!</div>
        }
      </Row>
    </>
  )
}

export default View