import React from 'react';

const previewPicture = ({pictureUrl}) => {
    return (
        <img className="img-fluid mb-2 mt-2" src={pictureUrl}/>
    );
}

export default previewPicture;