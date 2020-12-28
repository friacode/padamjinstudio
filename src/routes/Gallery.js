import React, { useEffect, useState } from 'react';
import { dbService } from 'fbase';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  const getGallery = async() => {
    const dbGallery = await dbService.collection("gallery").get();
    dbGallery.forEach(document => {
      const galleryObject = {
        ...document.data(),
        id: document.id,
      }
      setGallery((prev) => [galleryObject, ...prev]);
    });
  };
  useEffect(() => {
    getGallery();
  }, []);

  return (
    <>
      <span>Gallery</span>
      {gallery.map((item) => {
        return (
          <div key={item.id}>  
            <h4>{item.subject}</h4>
            <img src={item.url} alt={item.subject} width="200" />
          </div>
        );
      })}
    </>
  );
};

export default Gallery;