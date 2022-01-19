import './index.css'

type typePropsInput = {labelText:string, value:number, changeHandler:(e:{currentTarget:{value:string}})=>void}
type typePropsModalTags = {message:string, closeClickHandler: () => void, inputsProps: [typePropsInput, typePropsInput]}
const ModalTwiceInputsNumber = (props:typePropsModalTags) => {
    return(
        <div className="modal-twice-inputs-number">
            <p className="message">{props.message}</p>
            <button className="close" onClick={props.closeClickHandler}>&#10006;</button>
            <div className="input">
                {props.inputsProps.map((inputProp, index) => (
                    <>
                        <label htmlFor={inputProp.labelText}>{inputProp.labelText}</label>
                        <input id={inputProp.labelText} type="number" value={inputProp.value} onChange={inputProp.changeHandler}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default ModalTwiceInputsNumber