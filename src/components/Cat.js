import React, {Fragment} from "react";

function Cat(props) {
    return (
        <>
            <p>{props.name}</p>
            {props.favoriteColor ? 
            (<p>Favorite color: {props.favoriteColor}</p>) :
            (<p>No favorite color...</p>)}
        </>
    );
}

export default Cat