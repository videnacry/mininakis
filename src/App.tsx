import {useCallback, useEffect, useReducer, useState, Suspense, useContext} from 'react';

import { useFragment, usePreloadedQuery } from 'react-relay/hooks';
import { Products } from './products';
import { queryQuery } from './query';


import Gallery from './pages/main'
import Login from './pages/login';
import getConfig from './config';
import ImageType from './models/images/imageType';

import Context from './context';

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
export const imagesDefault:ImageType[] = []
function App (props:any) {
  
  const data:any = usePreloadedQuery(queryQuery, props.preloadedQuery);
  
  const product0 = useFragment(Products, data?.products?.edges[0]?.node)
  const product1 = useFragment(Products, data?.products?.edges[1]?.node)
  const product2 = useFragment(Products, data?.products?.edges[2]?.node)
  const product3 = useFragment(Products, data?.products?.edges[3]?.node)
  const product4 = useFragment(Products, data?.products?.edges[4]?.node)
  const product5 = useFragment(Products, data?.products?.edges[5]?.node)
  const product6 = useFragment(Products, data?.products?.edges[6]?.node)
  const product7 = useFragment(Products, data?.products?.edges[7]?.node)
  const product8 = useFragment(Products, data?.products?.edges[8]?.node)

  const [pageState, pageDispatch] = useReducer(pageReducer, pageInitial)
  const [images, setImages] = useState(imagesInitial)
  const context = useContext(Context)

  const goLogin = useCallback(() => pageDispatch({type:'navigate', value:'login'}), [])
  const goGallery = useCallback(() => pageDispatch({type:'navigate', value:'gallery'}), [])
  
  const products:any = [product0, product1, product2, product3, product4, product5, product6, product7, product8]
  
  //Load the photos
  useEffect(() => {
    setImagesAsync()
    async function setImagesAsync () {
      const images = products?.map((product:any) => {
        return {src:product.img_path, name: product.title, date:'01-01-2000'}
      })
      const config = await getConfig('dev', images)
      config.Images.map(img => imagesDefault.push(img))
      setImages(config.Images)
    }
  }, [])
  
  
  return (
      <Suspense fallback={'Loading...'}>
        <img className="background-image-left" src={backgroundImageSrc} alt="background"/>
        <img className="background-image-right" src={backgroundImageSrc} alt="background"/>
        <Context.Provider value={{images, setImages}}>
          { 
            pageState.pageName === 'gallery' ? <Gallery images={images} goLogin={goLogin} goMain={goGallery}/> :
            pageState.pageName === 'login' ? <Login goMain={goGallery}/> : ''
          }
        </Context.Provider>
    </Suspense>
  );
}

export default App;
