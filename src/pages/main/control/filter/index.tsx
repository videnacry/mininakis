import { useContext } from 'react'

import ContextImages from '../../contextImages'

import Select from './select'
import {ReactComponent as SearchSvg} from './search.svg'

import './index.css'

type propsFilter = {hideFilter: () => void}
const Filter = (props: propsFilter) => {
    const contextImages = useContext(ContextImages)

    return(
        <div className="filter">
            <div className="filter-effect"/>
            <button className="close" onClick={props.hideFilter}>&times;</button>
            <div className="searcher">
                <label htmlFor="search"><SearchSvg/></label>
                <input type="text" id="search"/>
            </div>
            <h1 className="title">Sort by</h1>
            <Select sortedProperty={contextImages.imagesState.sortedProperty} sortOptions={contextImages.sortOptions}/>
            {contextImages.sortOptions.byDirection.map((direction, index) => (
                <div className="label_input-radio" key={direction.name + index}>
                    <label htmlFor={direction.name}>
                        {direction.name}
                    </label> 
                    <input type="radio" name="sort-direction" id={direction.name} onInput={direction.sortHandler} defaultChecked={contextImages.imagesState.sortDirection === direction.value ? true : false}/>
                </div>
            ))}
        </div>
    )
}

export default Filter