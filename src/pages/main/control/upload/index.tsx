import {useCallback, useReducer} from 'react'

import FloatingLabel from './floating-label'
import InputImage from './inputImage.tsx'
import ModalTags from './modal-tags'
import ModalDescription from './modal-description'

import {ReactComponent as SvgTags} from './tags.svg'
import {ReactComponent as SvgDescription} from './chat-text.svg'

import uploadReducer from './reducer'

import './index.css'

type propsUpload = {closeHandler: ()=>void}
const Upload = (props: propsUpload) => {
    
    const [stateTags, dispatchTags] = useReducer(uploadReducer.reducer, uploadReducer.initialState)
    const addTagNameToTagsNameSelected = useCallback((tagId:number) => dispatchTags(new uploadReducer.ActionAddTag(tagId)), [])
    const removeTagNameToTagsNameSelected = useCallback(() => dispatchTags(new uploadReducer.ActionRemoveTagName), [])

    const setIsDisplayedModalTagsTrue = useCallback(() => dispatchTags(new uploadReducer.ActionSetIsDisplayedTagsModal(true)), [])
    const setIsDisplayedModalTagsFalse = useCallback(() => dispatchTags(new uploadReducer.ActionSetIsDisplayedTagsModal(false)), [])
    
    const setIsDisplayedModalDescriptionTrue = useCallback(() => dispatchTags(new uploadReducer.ActionSetIsDisplayedModalDescription(true)), [])
    const setIsDisplayedModalDescriptionFalse = useCallback(() => dispatchTags(new uploadReducer.ActionSetIsDisplayedModalDescription(false)), [])
    
    const setModalDescriptionValue = useCallback((descriptionText:string) => dispatchTags(new uploadReducer.ActionChangeDescription(descriptionText)), [])
    
    return(
        <div className="upload">
            <div className="background-filter"/>
            <button className="close" onClick={props.closeHandler}>&times;</button>
            <InputImage/>
            <FloatingLabel iconSvg={SvgTags} name="Tags" clickHandler={setIsDisplayedModalTagsTrue} value={stateTags.tagsNameSelected}/>
            {stateTags.isDisplayedModalDescription ? 
                <ModalDescription 
                    closeClickHandler={setIsDisplayedModalDescriptionFalse} 
                    inputChangeHandler={({currentTarget:{value}}) => setModalDescriptionValue(value)} 
                    descriptionText={stateTags.description}
                />
                : 
                <FloatingLabel iconSvg={SvgDescription} name="Description" clickHandler={setIsDisplayedModalDescriptionTrue} value={[stateTags.description]}/>
            }
            <button className="upload">upload</button>
            {stateTags.isDisplayedModalTags ? <ModalTags
                closeClickHandler={setIsDisplayedModalTagsFalse}
                tagSelected={stateTags.tagSelected}
                tagClickHandler={addTagNameToTagsNameSelected}
                tagSelectedClickHandler={removeTagNameToTagsNameSelected}/> 
                : ''
            }
        </div>
    )
}

export default Upload