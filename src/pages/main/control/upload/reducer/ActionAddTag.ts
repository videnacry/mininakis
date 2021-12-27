import {IActionUpload, typeStateUpload} from './index'
class ActionAddTag implements IActionUpload {
    id:number
    constructor (pId:number) {
        this.id = pId
    }
    executeAction (state:typeStateUpload):typeStateUpload {
        const tagSelected = state.tagSelected.getChildById(this.id)
        return {...state, tagsNameSelected: [...state.tagsNameSelected, tagSelected.name], tagSelected: tagSelected}
    }
}
export default ActionAddTag