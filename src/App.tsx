import {useCallback, useEffect, useReducer, useState, Suspense} from 'react';

import {
  useFragment,
  usePreloadedQuery,
} from 'react-relay/hooks';
import { Products } from './products';
import { queryQuery } from './query';


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

function App (props:any) {
  
  const data:any = usePreloadedQuery(queryQuery, props.preloadedQuery);
  console.log(data)
  const product = useFragment(Products, data?.products?.edges[10]?.node)
  console.log(product)

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
      <Suspense fallback={'Loading...'}>
        <img className="background-image-left" src={backgroundImageSrc} alt="background"/>
        <img className="background-image-right" src={backgroundImageSrc} alt="background"/>
        { 
          pageState.pageName === 'gallery' ? <Gallery images={images} goLogin={goLogin} goMain={goGallery}/> :
          pageState.pageName === 'login' ? <Login goMain={goGallery}/> : ''
        }
    </Suspense>
  );
}

export default App;
