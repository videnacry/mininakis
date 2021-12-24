import {useState, useCallback, useMemo, useReducer} from 'react'

import FloatingLabel from './floating-label'
import InputImage from './inputImage.tsx'
import TagsModal from './tags-modal'

import {ReactComponent as SvgTags} from './tags.svg'
import {ReactComponent as SvgDescription} from './chat-text.svg'

import {tagRoot, Tag} from './tags'

import './index.css'

type typeStateTags = {tagsNameSelected:string[], tagSelected:Tag}
const initialStateTags:typeStateTags = {tagsNameSelected: [], tagSelected: tagRoot}

const tagsReducer = (state:typeStateTags, action:{type:'addTagName'|'removeTagName', value:number}) => {
    switch (action.type) {
        case 'addTagName': {
            const tagSelected = state.tagSelected.getChildById(action.value)
            return {tagsNameSelected: [...state.tagsNameSelected, tagSelected.name], tagSelected: tagSelected}
        }
        case 'removeTagName': {
            if (state.tagsNameSelected[state.tagsNameSelected.length-1] !== state.tagSelected.father.name)
                state.tagsNameSelected.pop()
            return {tagsNameSelected: [...state.tagsNameSelected], tagSelected: state.tagSelected.father}
        }
    }
}

type propsUpload = {closeHandler: ()=>void}
const Upload = (props: propsUpload) => {
    const [isDisplayedTagsModal, setIsDisplayedTagsModal] = useState(false)
    const setIsDisplayedTagsModalTrue = useCallback(() => setIsDisplayedTagsModal(true), [])
    const setIsDisplayedTagsModalFalse = useCallback(() => setIsDisplayedTagsModal(false), [])
    const [stateTags, dispatchTags] = useReducer(tagsReducer, initialStateTags)
    const addTagNameToTagsNameSelected = useCallback((tagId:number) => dispatchTags({type: 'addTagName', value: tagId}), [])
    const removeTagNameToTagsNameSelected = useCallback(() => dispatchTags({type: 'removeTagName', value: 0}), [])

    return(
        <div className="upload">
            <div className="background-filter"/>
            <button className="close" onClick={props.closeHandler}>&times;</button>
            <InputImage/>
            <FloatingLabel iconSvg={SvgTags} name="Tags" clickHandler={setIsDisplayedTagsModalTrue} value={stateTags.tagsNameSelected}/>
            <FloatingLabel iconSvg={SvgDescription} name="Description" clickHandler={() => {}} value={[]}/>
            <button className="upload">upload</button>
            {isDisplayedTagsModal ? <TagsModal
                closeClickHandler={setIsDisplayedTagsModalFalse}
                tagSelected={stateTags.tagSelected}
                tagClickHandler={addTagNameToTagsNameSelected}
                tagSelectedClickHandler={removeTagNameToTagsNameSelected}/> 
                : ''
            }
        </div>
    )
}

export default Upload