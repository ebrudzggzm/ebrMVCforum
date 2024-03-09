import React, { useEffect, useState } from "react";
import ListPostsView from "./ListPostsView";
import axios from "axios";

const ListPostsController = () => {
    const [data,setData] =useState(null);
    const [showPopup,setShowPopup] = useState(false);
    const [userName,setUserName] = useState(null);

 useEffect(()=>{
 
    axios.get('http://localhost:3000/posts').then((res)=>setData(res.data));
 },[ ])
  return (
    <div>    
      <ListPostsView data = {data} setShowPopup={setShowPopup} showPopup={showPopup} userName={userName} setUserName={setUserName} />
    </div>
  );
};

export default ListPostsController;
