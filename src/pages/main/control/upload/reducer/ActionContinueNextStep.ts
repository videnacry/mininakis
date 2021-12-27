import { IActionUpload, typeStateUpload } from ".";

class ActionContinueNextStep implements IActionUpload {
    
    executeAction (state: typeStateUpload):typeStateUpload {
        const reactComponentStepsIndex = state.reactComponentStepsIndex + 1
        return {...state, reactComponentStepsIndex, reactComponentStepSelected: state.reactComponentSteps[reactComponentStepsIndex]}
    }
}

export default ActionContinueNextStep