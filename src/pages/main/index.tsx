import { useCallback, useMemo, useReducer, useRef, useState } from 'react'
import Header from './header'
import Nav from './nav'
import Gallery from './gallery'
import Control from './control'
import Footer from './footer'

import ImageType from '../../models/images/imageType'

import './index.css'

type mainProps = {images: ImageType[], goLogin: () => void, goMain: () => void}
const Main = (props: mainProps) => {

    const imagesReducer = useCallback((state: {images: ImageType[], sortedProperty: string}, action: {sortProperty: 'name'|'date'|'default'}) => {
        switch (action.sortProperty) {
            case 'name': 
                return {images: [...props.images.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)], sortedProperty: action.sortProperty}
            case 'date':
                return {images: [...props.images.sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : new Date(a.date) < new Date(b.date) ? -1 : 0)], sortedProperty: action.sortProperty}
            default:
                return {images: [...props.images.sort((a, b) => a.src > b.src ? 1 : a.src < b.src ? -1 : 0)], sortedProperty: action.sortProperty}
        }
    }, [props.images])
    const [imagesState, imagesDispatch] = useReducer(imagesReducer, {images: props.images, sortedProperty: 'default'})
    const sortOptions = useMemo(() => {
        return {
            byProperty: [
                {name: 'name', sortHandler: () => imagesDispatch({sortProperty: 'name'})},
                {name: 'date', sortHandler: () => imagesDispatch({sortProperty: 'date'})},
                {name: 'default', sortHandler: () => imagesDispatch({sortProperty: 'default'})}
            ]
        }
    }, [])

    const [areImagesInGrid, setImagesInGrid] = useState(false)

    return (
        <div className="main-page">
            <div className="left-bar"/>
            <div className="right-content">
                <Header setImagesInGrid={() => setImagesInGrid(true)} setImagesInCascade={() => setImagesInGrid(false)} goMain={props.goMain}/>
                <div className="main">
                    <Nav/>
                    <Gallery images={imagesState.images.length > 0 ? imagesState.images : props.images} areImagesInGrid={areImagesInGrid}/>
                    <Control goLogin={props.goLogin} sortOptions={sortOptions} sortedProperty={imagesState.sortedProperty}/>
                </div>
                <Footer areImagesInGrid={areImagesInGrid}/>
            </div>
        </div>
    )
}

export default Main