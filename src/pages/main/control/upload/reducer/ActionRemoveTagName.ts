import {IActionUpload, typeStateUpload} from './index'
class ActionRemoveTagName implements IActionUpload {
    executeAction(state: typeStateUpload): typeStateUpload{
        if (state.tagsNameSelected[state.tagsNameSelected.length-1] !== state.tagSelected.father.name)
            state.tagsNameSelected.pop()
        return {...state, tagsNameSelected: [...state.tagsNameSelected], tagSelected: state.tagSelected.father}
    }
}
export default ActionRemoveTagName