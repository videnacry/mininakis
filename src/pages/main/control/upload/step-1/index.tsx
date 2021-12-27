import {useCallback, useState} from 'react'
import uploadReducer, {typeStep} from '../reducer'

import FloatingLabel from '../floating-label'
import ModalTags from './modal_tags'
import ModalDescription from './modal_description'

import {ReactComponent as SvgTags} from './tags.svg'
import {ReactComponent as SvgDescription} from './chat-text.svg'

import './index.css'

const StepOne = (props:typeStep) => {
    const addTagNameToTagsNameSelected = useCallback((tagId:number) => props.dispatchUpload(new uploadReducer.ActionAddTag(tagId)),[])
    const removeTagNameToTagsNameSelected = useCallback(() => props.dispatchUpload(new uploadReducer.ActionRemoveTagName()),[])
    
    const setModalDescriptionValue = useCallback(({currentTarget:{value}}) => props.dispatchUpload(new uploadReducer.ActionChangeDescription(value)),[])

    const [isDisplayedModalTags, setIsDisplayedModalTags] = useState(false)
    const [isDisplayedModalDescription, setIsDisplayedModalDescription] = useState(false)

    const setIsDisplayedModalTagsTrue = useCallback(() => setIsDisplayedModalTags(true),[])
    const setIsDisplayedModalTagsFalse = useCallback(() => setIsDisplayedModalTags(false),[])
    
    const setIsDisplayedModalDescriptionTrue = useCallback(() => setIsDisplayedModalDescription(true),[])
    const setIsDisplayedModalDescriptionFalse = useCallback(() => setIsDisplayedModalDescription(false),[])

    const continueNextStep = useCallback(() => props.dispatchUpload(new uploadReducer.ActionContinueNextStep()), [])
    
    return(
        <>
        <FloatingLabel iconSvg={SvgTags} name="Tags" clickHandler={setIsDisplayedModalTagsTrue} value={props.stateUpload.tagsNameSelected}/>
            {isDisplayedModalDescription ? 
                <ModalDescription closeClickHandler={setIsDisplayedModalDescriptionFalse} inputChangeHandler={setModalDescriptionValue} descriptionText={props.stateUpload.description} />
                : 
                <FloatingLabel iconSvg={SvgDescription} name="Description" clickHandler={setIsDisplayedModalDescriptionTrue} value={[props.stateUpload.description]}/>
            }
            <button className="upload" onClick={continueNextStep}>next</button>
            {isDisplayedModalTags ? 
                <ModalTags closeClickHandler={setIsDisplayedModalTagsFalse} tagSelected={props.stateUpload.tagSelected} tagClickHandler={addTagNameToTagsNameSelected} tagSelectedClickHandler={removeTagNameToTagsNameSelected}/> 
                : 
                ''
            }
        </>
    )
}
export default StepOne