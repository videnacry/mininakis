import { IActionUpload, typeStateUpload } from ".";

class ActionSetDollarsNumber implements IActionUpload {
    dollarsNumber:number
    constructor (pDollarsNumber:number) {
        this.dollarsNumber = pDollarsNumber
    }
    executeAction (state: typeStateUpload):typeStateUpload {
        return {...state, dollarsNumber: this.dollarsNumber}
    }
}

export default ActionSetDollarsNumber