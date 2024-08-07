// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: 'rainbow trout' },
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
        },
      })
      .then(res => {
        setImages(res.data.results);
      })
      .catch(err => console.error(err));
  }, [images]);

  if (images.length === 0) {
    return <div>... loading data</div>;
  } else {
    return images.map(image => {
      return (
        <div key={image.id}>
          <p>
            <Link to="/">Home</Link>
          </p>
          <div>{image.description}</div>
          <img src={image.urls.thumb} alt={image.alt_description} />
        </div>
      );
    });
  }
};

export default ImageList;
