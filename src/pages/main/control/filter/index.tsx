import {ReactComponent as SearchSvg} from './search.svg'

import Select from './select'

import './index.css'

type propsFilter = {hideFilter: () => void, sortOptions: {byProperty: {name: string, sortHandler: () => void}[]}, sortedProperty: string}
const Filter = (props: propsFilter) => {
    return(
        <div className="filter">
            <div className="filter-effect"/>
            <button className="close" onClick={props.hideFilter}>&times;</button>
            <div className="searcher">
                <label htmlFor="search"><SearchSvg/></label>
                <input type="text" id="search"/>
            </div>
            <h1 className="title">Sort by</h1>
            <Select sortOptions={props.sortOptions} sortedProperty={props.sortedProperty}/>
            <div className="label_input-radio">
                <label htmlFor="up">
                    Up
                </label> 
                <input type="radio" name="sort-direction" value="true" id="up"/>
            </div>
            <div className="label_input-radio">
                <label htmlFor="down">
                    Down
                </label>
                <input type="radio" name="sort-direction" value="false" id="down" checked/>
            </div>
        </div>
    )
}

export default Filter