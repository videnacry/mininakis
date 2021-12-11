import { useState } from 'react'
import Header from './header'
import Nav from './nav'
import Gallery from './gallery'
import Control from './control'
import Footer from './footer'

import ImageType from '../../models/images/imageType'

import './index.css'

type mainProps = {images: ImageType[]}

const Main = (props: mainProps) => {
    const [areImagesInGrid, setImagesInGrid] = useState(false)

    return (
        <div className="main-page">
            <div className="left-bar"/>
            <div className="right-content">
                <Header setImagesInGrid={() => setImagesInGrid(true)} setImagesInCascade={() => setImagesInGrid(false)}/>
                <div className="main">
                    <Nav/>
                    <Gallery images={props.images} areImagesInGrid={areImagesInGrid}/>
                    <Control/>
                </div>
                <Footer areImagesInGrid={areImagesInGrid}/>
            </div>
        </div>
    )
}

export default Main