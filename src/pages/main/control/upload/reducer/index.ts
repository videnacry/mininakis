import { Tag, tagRoot } from "../tags"

import ActionAddTag from "./ActionAddTag"
import ActionChangeDescription from "./ActionChangeDescription"
import ActionRemoveTagName from "./ActionRemoveTagName"
import ActionSetCentsNumber from "./ActionSetCentsNumber"
import ActionSetDollarsNumber from "./ActionSetDollarsNumber"
import ActionSetHoursNumber from "./ActionSetHoursNumber"
import ActionSetDaysNumber from "./ActionSetDaysNumber"
import ActionContinueNextStep from "./ActionContinueNextStep"
import ActionContinuePrevStep from "./ActionContinuePrevStep"

import StepOne from "../step-1"
import StepTwo from "../step-2"

export type typeStep = {dispatchUpload:(action:IActionUpload)=>void, stateUpload:typeStateUpload}
export type typeStateUpload = {
    tagsNameSelected:string[], 
    tagSelected:Tag, description:string,
    reactComponentSteps:((props:typeStep)=>JSX.Element)[],
    reactComponentStepsIndex:number,
    reactComponentStepSelected:(props:typeStep)=>JSX.Element,
    hoursNumber:number,
    daysNumber:number,
    centsNumber:number,
    dollarsNumber:number
}
const initialState:typeStateUpload = {
    tagsNameSelected: [], 
    tagSelected: tagRoot, 
    description: '',
    reactComponentSteps: [StepOne, StepTwo],
    reactComponentStepsIndex: 0,
    reactComponentStepSelected: StepOne,
    hoursNumber: 0,
    daysNumber: 0,
    centsNumber: 0,
    dollarsNumber: 0
}
export interface IActionUpload {
    executeAction (state:typeStateUpload):typeStateUpload
}
const reducer = (state:typeStateUpload, action:IActionUpload) => {
    return action.executeAction(state)
}
const uploadReducer = {
    reducer,
    ActionContinueNextStep,
    ActionContinuePrevStep,
    ActionSetCentsNumber,
    ActionSetDollarsNumber,
    ActionSetHoursNumber,
    ActionSetDaysNumber,
    ActionChangeDescription,
    ActionRemoveTagName,
    ActionAddTag,
    initialState
}
export default uploadReducer