import { useContext } from 'react'
import ContextImages from '../../../contextImages'

import './index.css'

const Select = () => {
    const contextImages = useContext(ContextImages)
    let sortedProperty = contextImages.sortOptions.byProperty.find(property => property.name === contextImages.imagesState.sortedProperty)
    sortedProperty = sortedProperty ? sortedProperty : contextImages.sortOptions.byProperty[0]
    return(
        <div className="select">
            <div className="selected">
                <label htmlFor="select">
                    <span className="text">{contextImages.imagesState.sortedProperty}</span>
                    <sortedProperty.icon className="icon"/>
                </label>
                <button id="select">«</button>
            </div>
            {contextImages.sortOptions.byProperty.map((property, index) => 
                <button className={'option ' + ((property.name === contextImages.imagesState.sortedProperty) ? 'selected' : '')} onClick={property.sortHandler} key={index + property.name}>
                    <span className="text">{property.name}</span>
                    <property.icon className="icon"/>
                </button>)}
        </div>
    )
}

export default Select