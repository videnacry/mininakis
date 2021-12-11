import {useEffect, useState} from 'react';
import Gallery from './pages/main'
import getConfig from './config';
import ImageType from './models/images/imageType';

import backgroundImageSrc from './5ant.jpg'
import './App.css';

function App () {
  
  const initialValue: ImageType[] = []
  const [images, setImages] = useState(initialValue)
  
  //Load the photos
  useEffect(() => {
    const config = getConfig('dev')
    setImagesAsync()
    async function setImagesAsync () {
      setImages(await config.Images.getAllImagesAsync())
    }
  }, [])
  
  return (
    <>
      <img className="background-image-left" src={backgroundImageSrc} alt="background"/>
      <img className="background-image-right" src={backgroundImageSrc} alt="background"/>
      <Gallery images={images}/>
    </>
  );
}

export default App;
