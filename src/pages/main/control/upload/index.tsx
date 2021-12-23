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

const tagsReducer = (state:typeStateTags, action:{type:'addTagName', value:number}) => {
    switch (action.type) {
        case 'addTagName': {
            const tagSelected = state.tagSelected.getChildById(action.value)
            return {tagsNameSelected: [...state.tagsNameSelected, tagSelected.name], tagSelected: tagSelected}
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

    return(
        <div className="upload">
            <div className="background-filter"/>
            <button className="close" onClick={props.closeHandler}>&times;</button>
            <InputImage/>
            <FloatingLabel iconSvg={SvgTags} name="Tags" clickHandler={setIsDisplayedTagsModalTrue} value={stateTags.tagsNameSelected}/>
            <FloatingLabel iconSvg={SvgDescription} name="Description" clickHandler={() => {}} value={[]}/>
            <button className="upload">upload</button>
            {isDisplayedTagsModal ? <TagsModal closeClickHandler={setIsDisplayedTagsModalFalse} tags={stateTags.tagSelected.children} tagClickHandler={addTagNameToTagsNameSelected}/> : ''}
        </div>
    )
}

export default Upload