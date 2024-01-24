import React, { useState } from 'react';

const Test = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {

    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      console.log("Before Reading:- ",reader.result)
      reader.onloadend = () => {
        console.log("i am inside onloadend")
        setSelectedImage(reader.result);
      };
      console.log("i am outside onloadend")
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Selected Image:</h2>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default Test;
