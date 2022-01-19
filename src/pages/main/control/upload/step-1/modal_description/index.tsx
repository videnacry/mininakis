import { useCallback } from 'react'
import './index.css'

type typePropsModalDescription = {closeClickHandler:() => void, inputChangeHandler:(e:{currentTarget:{value:string}}) => void, descriptionText:string}
const ModalDescription = (props:typePropsModalDescription) => {
    const inputChangeHandler = useCallback(e => {
        if (e.currentTarget.value.length<=300)props.inputChangeHandler(e)
    }, [props.inputChangeHandler])
    return(
        <div className="modal-description">
            <p className="message">{300 - props.descriptionText.length} characters left</p>
            <button className="accept" onClick={props.closeClickHandler}>&#10006;</button>
            <textarea className="input" onChange={inputChangeHandler} value={props.descriptionText} ref={ref => ref?.focus()}/>
        </div>
    )
}

export default ModalDescription