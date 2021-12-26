import { Tag, tagRoot } from "./tags"

type typeState = {tagsNameSelected:string[], tagSelected:Tag, description:string, isDisplayedModalDescription:boolean, isDisplayedModalTags:boolean}
const initialState:typeState = {tagsNameSelected: [], tagSelected: tagRoot, description: '', isDisplayedModalDescription:false, isDisplayedModalTags:false}

interface Action {
    executeAction (state:typeState):typeState
}
class ActionAddTag implements Action {
    id:number
    constructor (pId:number) {
        this.id = pId
    }
    executeAction (state:typeState):typeState {
        const tagSelected = state.tagSelected.getChildById(this.id)
        return {...state, tagsNameSelected: [...state.tagsNameSelected, tagSelected.name], tagSelected: tagSelected}
    }
}
class ActionRemoveTagName implements Action {
    executeAction(state: typeState): typeState{
        if (state.tagsNameSelected[state.tagsNameSelected.length-1] !== state.tagSelected.father.name)
            state.tagsNameSelected.pop()
        return {...state, tagsNameSelected: [...state.tagsNameSelected], tagSelected: state.tagSelected.father}
    }
}
class ActionChangeDescription implements Action {
    descriptionText:string
    constructor (pDescriptionText:string) {
        this.descriptionText = pDescriptionText
    }
    executeAction(state: typeState): typeState {
        return {...state, description: this.descriptionText}
    }
}
class ActionSetIsDisplayedModalDescription implements Action {
    isDisplayedModalDescription:boolean
    constructor (pIsDisplayedModalDescription:boolean) {
        this.isDisplayedModalDescription = pIsDisplayedModalDescription
    }
    executeAction(state: typeState): typeState {
        return {...state, isDisplayedModalDescription: this.isDisplayedModalDescription}
    }
}
class ActionSetIsDisplayedTagsModal implements Action {
    isDisplayedModalTags:boolean
    constructor (pIsDisplayedModalTags:boolean) {
        this.isDisplayedModalTags = pIsDisplayedModalTags
    }
    executeAction(state: typeState): typeState {
        return {...state, isDisplayedModalTags: this.isDisplayedModalTags}
    }
}
const reducer = (state:typeState, action:Action) => {
    return action.executeAction(state)
}
const uploadReducer = {
    reducer,
    ActionSetIsDisplayedTagsModal,
    ActionSetIsDisplayedModalDescription,
    ActionChangeDescription,
    ActionRemoveTagName,
    ActionAddTag,
    initialState
}
export default uploadReducer