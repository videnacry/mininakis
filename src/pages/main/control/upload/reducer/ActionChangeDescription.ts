import {IActionUpload, typeStateUpload} from './index'
class ActionChangeDescription implements IActionUpload {
    descriptionText:string
    constructor (pDescriptionText:string) {
        this.descriptionText = pDescriptionText
    }
    executeAction(state: typeStateUpload): typeStateUpload {
        return {...state, description: this.descriptionText}
    }
}
export default ActionChangeDescription