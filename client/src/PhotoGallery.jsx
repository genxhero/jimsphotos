/**
 * A photo gallery takes a category prop which determines which photos shall be displayed.
 */

import React from 'react';
import PhotoCard from './PhotoCard';

 const photoGallery = props => {
     const photos = {props};
     return (
        <div>
            {photos.map(photo => <PhotoCard imageUrl={photo.url}/>)}
        </div>
     )
 }

 export default photoGallery;