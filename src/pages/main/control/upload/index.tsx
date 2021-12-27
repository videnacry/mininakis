import {useReducer} from 'react'

import InputImage from './inputImage.tsx'

import uploadReducer from './reducer'

import './index.css'

type propsUpload = {closeHandler: ()=>void}
const Upload = (props: propsUpload) => {
    
    const [stateUpload, dispatchUpload] = useReducer(uploadReducer.reducer, uploadReducer.initialState)
    
    return(
        <div className="upload">
            <div className="background-filter"/>
            <button className="close" onClick={props.closeHandler}>&times;</button>
            <InputImage/>
            <stateUpload.reactComponentStepSelected dispatchUpload={dispatchUpload} stateUpload={stateUpload}/>
        </div>
    )
}

export default Upload