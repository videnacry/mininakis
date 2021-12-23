import { FunctionComponent, SVGProps } from 'react'
import './index.css'

type propsFloatingLabel = {name: string, iconSvg: (FunctionComponent<SVGProps<SVGSVGElement>>), clickHandler: () => void, value: string[]}
const FloatingLabel = (props: propsFloatingLabel) => {
    
    return(
        <div className="floating-label" onClick={props.clickHandler}>
            <props.iconSvg className="icon"/>
            <div className="input">
                <label>{props.name}</label>
                {props.value.map(val => val+', ')}
            </div>
        </div>
    )
}

export default FloatingLabel