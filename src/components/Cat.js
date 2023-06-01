import React from "react";

function Cat(props) {
    
    return (
      <div className="card m-2">
        <img className="card-img-top h-50 d-inline-block" src={props.img} alt="Kitty pic" />
        <div className="card-body text-center" style={{background: props.favoriteColor}}>
          <h3>{props.name}</h3>
          <hr className="my-2" />
          <p className="card-text">{props.furPattern}</p>
          <hr className="my-2" />
          {props.editCat}
        </div>
      </div>
    );
  }
  

export default Cat