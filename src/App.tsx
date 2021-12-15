import {useCallback, useEffect, useReducer, useState} from 'react';
import Gallery from './pages/main'
import Login from './pages/login';
import getConfig from './config';
import ImageType from './models/images/imageType';

import backgroundImageSrc from './5ant.jpg'
import './App.css';


const imagesInitial: ImageType[] = []

type pageType = {pageName: string}
const pageInitial: pageType = {pageName: 'gallery'}
const pageReducer = (state: pageType|any , action: {type: 'navigate', value: 'gallery'|'login'}) => {
  switch (action.type) {
    case 'navigate':
      return {pageName: action.value}
    default :
      return state
  }
}
function App () {
  
  const [pageState, pageDispatch] = useReducer(pageReducer, pageInitial)
  const [images, setImages] = useState(imagesInitial)

  const goLogin = useCallback(() => pageDispatch({type:'navigate', value:'login'}), [])
  const goGallery = useCallback(() => pageDispatch({type:'navigate', value:'gallery'}), [])
  
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
      { 
        pageState.pageName === 'gallery' ? <Gallery images={images} goLogin={goLogin} goMain={goGallery}/> :
        pageState.pageName === 'login' ? <Login goMain={goGallery}/> : ''
      }
    </>
  );
}

export default App;
