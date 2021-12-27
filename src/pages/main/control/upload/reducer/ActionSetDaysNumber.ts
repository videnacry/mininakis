import { IActionUpload, typeStateUpload } from ".";

class ActionSetDaysNumber implements IActionUpload {
    daysNumber:number
    constructor (pDaysNumber:number) {
        this.daysNumber = pDaysNumber
    }
    executeAction (state: typeStateUpload):typeStateUpload {
        return {...state, daysNumber: this.daysNumber}
    }
}

export default ActionSetDaysNumber