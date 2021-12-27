import { IActionUpload, typeStateUpload } from ".";

class ActionContinuePrevStep implements IActionUpload {
    
    executeAction (state: typeStateUpload):typeStateUpload {
        const reactComponentStepsIndex = state.reactComponentStepsIndex - 1
        return {...state, reactComponentStepsIndex, reactComponentStepSelected: state.reactComponentSteps[reactComponentStepsIndex]}
    }
}

export default ActionContinuePrevStep