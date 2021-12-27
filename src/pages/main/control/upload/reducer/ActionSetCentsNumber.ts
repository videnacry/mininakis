import { IActionUpload, typeStateUpload } from ".";

class ActionSetCentsNumber implements IActionUpload {
    centsNumber:number
    constructor (pCentsNumber:number) {
        this.centsNumber = pCentsNumber
    }
    executeAction (state: typeStateUpload):typeStateUpload {
        return {...state, centsNumber: this.centsNumber}
    }
}

export default ActionSetCentsNumber