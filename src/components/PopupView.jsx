import React from "react";

const PopupView = ({ setShowPopup, data }) => {
  console.log(data, "popup");

  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrap">
          <h4>
            <span>{data && data[0].user}</span>Kullanıcısının Gönderileri
          </h4>
          <button onClick={() => setShowPopup(false)}>kapat</button>
        </div>
        {!data && <p>Yükleniyor...</p>}

        {data?.map((post) => (
          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupView;
