import { IActionUpload, typeStateUpload } from ".";

class ActionSetHoursNumber implements IActionUpload {
    hoursNumber:number
    constructor (pHoursNumber:number) {
        this.hoursNumber = pHoursNumber
    }
    executeAction (state: typeStateUpload):typeStateUpload {
        return {...state, hoursNumber: this.hoursNumber}
    }
}

export default ActionSetHoursNumber