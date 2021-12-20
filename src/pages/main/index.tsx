import './index.css'
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'

import ContextImages from './contextImages'

import Header from './header'
import Nav from './nav'
import Gallery from './gallery'
import Control from './control'
import Footer from './footer'

import {ReactComponent as SvgCalendar} from './calendar-event.svg'
import {ReactComponent as SvgUpArrow} from './arrow-up.svg'
import {ReactComponent as SvgDownArrow} from './arrow-down.svg'
import {ReactComponent as SvgMixArrow} from './arrow-down-up.svg'
import {ReactComponent as SvgAZ} from './abc-svgrepo-com.svg'

import ImageType from '../../models/images/imageType'
import getImagesSorted from './getImagesSorted'

type mainProps = {images: ImageType[], goLogin: () => void, goMain: () => void}
type typeImagesState = {images: ImageType[], sortedProperty: string, sortDirection: string}
type typeImagesReducerAction = {type: 'sortProperty'|'sortDirection', value: 'name'|'date'|'default'|'upDirection'|'downDirection'|'mixedDirection'}
const Main = (props: mainProps) => {
    const imagesReducer = useCallback((state: typeImagesState, action: typeImagesReducerAction) => {
        switch (action.type) {
            case 'sortProperty': {
                const isAscending = (state.sortDirection === 'upDirection') ? true : false
                const isMixed = (state.sortDirection === 'mixedDirection') ? true : false
                const sortProperty = (typeof action.value === 'string') ? action.value : ''
                return {images: getImagesSorted(props.images, sortProperty, isAscending, isMixed), sortedProperty: sortProperty, sortDirection: state.sortDirection}
            }
            case 'sortDirection':{
                const isAscending = (action.value === 'upDirection') ? true : false
                const isMixed = (action.value === 'mixedDirection') ? true : false
                return {images: getImagesSorted(props.images, state.sortedProperty, isAscending, isMixed), sortedProperty: state.sortedProperty, sortDirection: action.value}
            }
            default:
                return {images: props.images, sortedProperty: 'default', sortDirection: state.sortDirection}
        }
    }, [props.images])
    const [imagesState, imagesDispatch] = useReducer(imagesReducer, {images: props.images, sortedProperty: 'default', sortDirection: 'upDirection'})

    const sortOptions = useMemo(() => {
        return {
            byProperty: [
                {name: 'name', sortHandler: () => imagesDispatch({type: 'sortProperty', value: 'name'}), icon: SvgAZ},
                {name: 'date', sortHandler: () => imagesDispatch({type: 'sortProperty', value: 'date'}), icon: SvgCalendar}
            ],
            byDirection: [
                {name: 'up', value: 'upDirection', sortHandler: () => imagesDispatch({type: 'sortDirection', value: 'upDirection'}), icon: SvgUpArrow},
                {name: 'down', value: 'downDirection', sortHandler: () => imagesDispatch({type: 'sortDirection', value: 'downDirection'}), icon: SvgDownArrow},
                {name: 'mix', value: 'mixedDirection', sortHandler: () => imagesDispatch({type: 'sortDirection', value: 'mixedDirection'}), icon: SvgMixArrow}
            ]
        }
    }, [])
    
    const [areImagesInGrid, setImagesInGrid] = useState(false)
    
    useEffect(() =>  {
        imagesDispatch({type: 'sortProperty', value: 'name'})
    },[props.images])

    return (
        <div className="main-page">
            <div className="left-bar"/>
            <div className="right-content">
                <Header setImagesInGrid={() => setImagesInGrid(true)} setImagesInCascade={() => setImagesInGrid(false)} goMain={props.goMain}/>
                <div className="main">
                    <Nav/>
                    <Gallery images={imagesState.images.length > 0 ? imagesState.images : props.images} areImagesInGrid={areImagesInGrid}/>
                    <ContextImages.Provider value={{sortOptions, imagesState}}>
                        <Control goLogin={props.goLogin} />
                    </ContextImages.Provider>
                </div>
                <Footer areImagesInGrid={areImagesInGrid}/>
            </div>
        </div>
    )
}

export default Main