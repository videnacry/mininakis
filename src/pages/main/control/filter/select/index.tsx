import './index.css'

type propsSelect = {sortOptions: {byProperty: {name: string, sortHandler: () => void}[]}, sortedProperty: string}
const Select = (props: propsSelect) => {
    return(
        <div className="select">
            <div className="selected">
                <label htmlFor="select">{props.sortedProperty}</label>
                <button id="select">«</button>
            </div>
            {props.sortOptions.byProperty.map((property, index) => 
                <button className={'option ' + ((property.name === props.sortedProperty) ? 'selected' : '')} onClick={property.sortHandler} key={index + property.name}>
                    {property.name}
                </button>)}
        </div>
    )
}

export default Select