import SERVERURL from "./serverURL"
import commonAPI from "./commonAPI"


// saveVideoAPI - use POST method, APi call is used by Add Component. to URL : http://localhost:3000/uploadVideos
export const saveVideoAPI = async (videoDetails) =>{
  return await commonAPI('POST', `${SERVERURL}/uploadVideos`, videoDetails)
}

// getAllVideoAPI - use GET method, API call is used by View Component. to URL : http://localhost:3000/uploadVideos
export const getAllVideoAPI = async () =>{
  console.log("inside");
    return await commonAPI('GET', `${SERVERURL}/uploadVideos`, '')
}

// saveHistoryAPI - use POST method, API call is used by VideoCard Component. to URL : http://localhost:3000/history
export const saveHistoryAPI = async (historyDetails) =>{
  return await commonAPI('POST', `${SERVERURL}/history`, historyDetails)
}

// getAllHistoryAPI - use GET method, API call is used by History Component. to URL : http://localhost:3000/history
export const getAllHistoryAPI = async () =>{
  return await commonAPI('GET', `${SERVERURL}/history`, '')
}

// deleteHistoryAPI - use DELETE method, API call is used by History Component. to URL : http://localhost:3000/history
export const deleteHistoryAPI = async (id) =>{
  return await commonAPI('DELETE', `${SERVERURL}/history/${id}`, {})
}

// deleteVideoAPI - use DELETE method, API call is used by videoCard Component. to URL : http://localhost:3000/uploadVideos
export const deleteVideoAPI = async (id) =>{
  return await commonAPI('DELETE', `${SERVERURL}/uploadVideos/${id}`, {})
}

// saveCategoryAPI - use POST method, API call is used by Add Component. to URL : http://localhost:3000/catrgories
export const saveCategoryAPI = async (categoryDetails) =>{
  return await commonAPI('POST', `${SERVERURL}/catrgories`, categoryDetails)
}

// getAllCategoryAPI - use GET method, API call is used by category Component. to URL : http://localhost:3000/catrgories
export const getAllCategoryAPI = async () =>{
  return await commonAPI('GET', `${SERVERURL}/catrgories`, '')
}

// deleteCategoryAPI - use DELETE method, API call is used by catrgories Component when user clicked on delete button. to URL : http://localhost:3000/catrgories
export const deleteCategoryAPI = async (id) =>{
  return await commonAPI('DELETE', `${SERVERURL}/catrgories/${id}`, {})
}

// updateCateegoryAPI - use PUT method, API call is used by catrgories Component when user drops a video over category. to URL : http://localhost:3000/catrgories
export const updateCategoryAPI = async (categoryDetails) =>{
  return await commonAPI('PUT', `${SERVERURL}/catrgories/${categoryDetails?.id}`, categoryDetails)
}

