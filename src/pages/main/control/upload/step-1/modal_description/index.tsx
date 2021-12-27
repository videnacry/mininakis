import './index.css'

type typePropsModalDescription = {closeClickHandler:() => void, inputChangeHandler:(e:{currentTarget:{value:string}}) => void, descriptionText:string}
const ModalDescription = (props:typePropsModalDescription) => {
    return(
        <div className="modal-description">
            <button className="accept" onClick={props.closeClickHandler}>&#10006;</button>
            <textarea className="input" onChange={props.inputChangeHandler} value={props.descriptionText}/>
        </div>
    )
}

export default ModalDescription