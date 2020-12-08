/**
 * Display one photo, small format, for gallery pages and such.
 */

 import React from 'react';

 const PhotoCard = props => {

    const imageUrl = props.imageUrl || "https://via.placeholder.com/150";

        return (
            <div>
                <img src={imageUrl}/>
            </div>
        )
 }


 export default PhotoCard;