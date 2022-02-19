import { useState, useEffect } from 'react';
import Button from '@mui/material//Button';
import Box from '@mui/material//Box';
import "./images/image-preview.jpg";

const FileInput = ({setImage}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      setImage(imageUrl)
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={e => {
          setSelectedImage(e.target.files[0])
          // console.log(selectedImage)
          
        }}
      />
      <label htmlFor="select-image">
        <Button className="upload-image" variant="contained" color="primary" component="span" style={{ marginLeft: "20px", marginTop: "-20px" }}>
          Upload
        </Button>
      </label>
      {/* {imageUrl && selectedImage && (

        <Box mt={2} textAlign="center">

          <div className="preview-image" style={{ border: "solid 1px black" }}>
            <img src={imageUrl} alt={selectedImage.name} height="300px" width="500px" />
          </div>

        </Box>

      )} */}
    </>
  );
};

export default FileInput;
