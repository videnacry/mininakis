import './index.css'

type propsFloatingLabel = {name: string, type: string, iconSvg: JSX.Element}
const FloatingLabel = (props: propsFloatingLabel) => {
    
    return(
        <div className="form_floating-label">
            {props.iconSvg}
            <div className="input">
                <label htmlFor={props.name}>
                    {props.name}
                </label>
                <input type={props.type} id={props.name}/>
            </div>
        </div>
    )
}

export default FloatingLabel