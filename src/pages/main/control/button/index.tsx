import React, { FunctionComponent, SVGProps } from 'react'
import './index.css'

type propsButton = {
    text: string,
    labelText: string|undefined,
    IconSvg: FunctionComponent<SVGProps<SVGSVGElement>>,
    clickHandler: () => void
}
const Button = (props: propsButton) => {
    return(
        props.labelText ?
            <div className="button-labeled" onClick={props.clickHandler}>
                <label htmlFor={props.text} className="label">{props.labelText}</label>
                <button id={props.text} className="button">
                    <div className="filter"/>
                    <div className="text">{props.text}</div>
                    <i className="icon">
                        <props.IconSvg width="100%" height="100%" fill="#181818"/>
                    </i>
                </button>
            </div> :
            <button className="button" onClick={props.clickHandler}>
            <div className="filter"/>
            <div className="text">{props.text}</div>
            <i className="icon">
                <props.IconSvg width="100%" height="100%" fill="#181818"/>
            </i>
            </button>
    )
}

export default Button