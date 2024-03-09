import React, { useEffect,useState } from 'react'
import PopupView from './PopupView';
import axios from "axios";

const PopupController = ({userName,setShowPopup}) => {
  const [data,setData] = useState(null);
  
useEffect(()=>{
  axios.get(`http://localhost:3000/posts?user=${userName}`).then((res)=>setData(res.data));
},[]);

  return <PopupView data={data} setShowPopup={setShowPopup}/>
}

export default PopupController;
