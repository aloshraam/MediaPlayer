import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { deleteCategoryAPI, deleteVideoAPI, getAllCategoryAPI, saveCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';

const Category = ({setDeleteResponseFromCategory, deleteResponseFromView}) => {

  useEffect(()=>{
    getAllCategories()
  },[deleteResponseFromView])

  const [allCategories, setAllCategories] = useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState("")

  const handleSaveCategory = async() =>{
    if(categoryName){
      const categoryDetails = {categoryName, allVideos:[]}
      try {
        const result = await saveCategoryAPI(categoryDetails)
        if(result.status >=200 && result.status < 300){
          alert("Category Created")
          getAllCategories()
          handleClose()
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      alert("Please provide a category name!!!")
    }
  }

  const getAllCategories = async() =>{
    try {
      const result = await getAllCategoryAPI()
      if(result.status >=200 && result.status < 300){
        setAllCategories(result.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const removeCategory = async (id) => {
    try {
      await deleteCategoryAPI(id)
      getAllCategories()
    } catch (error) {
      console.log(error);
    }
  }

  //recieving data from videocard thorugh data
  const videoCardDropOverCategory = async (e, categoryDetails) =>{
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);

    // Update category by adding video to videoDetails in categoryDetails
    categoryDetails.allVideos.push(videoDetails)
    console.log(categoryDetails);

    // api call to update the category after drag and drop
    try {
      await updateCategoryAPI(categoryDetails) //update the category
      getAllCategories() //refresh the page

      console.log('id', categoryDetails);
      const result = await deleteVideoAPI(videoDetails.id)      //delete video from allVideos in videoCard component
      setDeleteResponseFromCategory(result)
    } catch (error) {
      console.log(error);
    }

  }

  // to prevent other events happen while dragging
 const dragOverCategory= (e) =>{
  e.preventDefault()
  }

  // sending drag data to the videoCard
 const dragDropFromCategoryToView = (e, dragVideoDetails, categoryDetails) =>{
  console.log('inside categoryvideo');
  let dragData = {video : dragVideoDetails, categoryDetails}
  console.log(dragData);
  e.dataTransfer.setData('dragData',JSON.stringify(dragData))
 }

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h5>All Categories</h5>
        <button className='btn btn-info ms-3 rounded-circle fw-bolder fs-5' onClick={handleShow} > + </button>
      </div>

    {/* Display all category */}

      <div className='container-fluid p-3 m-3'>
        {/* Single Category View */}
        {
          allCategories?.length>0?
            allCategories?.map(categoryDetails =>(
              <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className='rounded border mb-3'>
                <div className='d-flex justify-content-between'>
                  <h5 className='text-info p-2'>{categoryDetails?.categoryName}</h5>
                  <Button className='btn' onClick={()=>removeCategory(categoryDetails?.id)}><i className="fa-solid fa-trash text-danger"></i></Button>
                </div>
                {/* Display Category Video */}
                <div className='row mt-2'>
                  {
                    //Iterating videoCard according to the categories: AllVideo data
                    categoryDetails?.allVideos?.length>0 &&
                    categoryDetails?.allVideos?.map((video)=>(
                      // Also drag video to VideoCard
                      <div draggable={true} onDragStart={e=>dragDropFromCategoryToView(e, video, categoryDetails)} key={video?.id} className='col-lg-4'>
                        <VideoCard displayData={video} insideCategory = {true}/>
                      </div>
                    ))      
                  }
                </div>
              </div>
            ))
          :
          <div className='fw-bolder text-danger fs-5'>NO Categories added Yet!!</div>
        }
      </div>

      {/* Modal */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel controlId="floatingCatergoryName" label="Category Name">
              <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
            </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category