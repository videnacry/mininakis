import {useCallback, useState} from 'react'
import uploadReducer, {typeStep} from '../reducer'

import FloatingLabel from '../floating-label'
import ModalTwiceInputsNumber from './modal_twice-inputs-number'

import {ReactComponent as SvgPrice} from './coin.svg'
import {ReactComponent as SvgTimeLapse} from './stopwatch.svg'

import './index.css'
const ifNumberBetween = (minNumber:number, maxNumber:number, value:number, next:(value:number)=>void) => {
    if (value >= minNumber && value <= maxNumber) next(value)
}
const StepTwo = (props:typeStep) => {
    
    const setCentsValue = useCallback(({currentTarget:{value}}) => ifNumberBetween(0, 99, Number(value), (value:number) => props.dispatchUpload(new uploadReducer.ActionSetCentsNumber(value))), [])
    const setDollarsValue = useCallback(({currentTarget:{value}}) => ifNumberBetween(0, 10000000, Number(value), (value:number) => props.dispatchUpload(new uploadReducer.ActionSetDollarsNumber(value))), [])

    const setHoursValue = useCallback(({currentTarget:{value}}) => ifNumberBetween(0, 23, Number(value), (value:number) => props.dispatchUpload(new uploadReducer.ActionSetHoursNumber(value))), [])
    const setDaysValue = useCallback(({currentTarget:{value}}) => ifNumberBetween(0, 60, Number(value), (value:number) => props.dispatchUpload(new uploadReducer.ActionSetDaysNumber(value))), [])

    const continuePrevStep = useCallback(() => props.dispatchUpload(new uploadReducer.ActionContinuePrevStep()), [])

    const [isDisplayedModalPrice, setIsDisplayedModalPrice] = useState(false)
    const [isDisplayedModalTimeLapse, setIsDisplayedModalTimeLapse] = useState(false)

    const setIsDisplayedModalPriceTrue = useCallback(() => setIsDisplayedModalPrice(true),[])
    const isDisplayedModalPriceFalse = useCallback(() => setIsDisplayedModalPrice(false),[])
    
    const setIsDisplayedModalTimeLapseTrue = useCallback(() => setIsDisplayedModalTimeLapse(true),[])
    const setIsDisplayedModalTimeLapseFalse = useCallback(() => setIsDisplayedModalTimeLapse(false),[])
    
    return(
        <>
        {isDisplayedModalPrice ? 
            <ModalTwiceInputsNumber message={'max price 10000000.99 dollars'} closeClickHandler={isDisplayedModalPriceFalse} inputsProps={[{labelText:'dollars', value: props.stateUpload.dollarsNumber, changeHandler: setDollarsValue}, {labelText:'cents', value:props.stateUpload.centsNumber, changeHandler: setCentsValue}]}/>
            : 
            <FloatingLabel iconSvg={SvgPrice} name="Price" clickHandler={setIsDisplayedModalPriceTrue} value={[props.stateUpload.dollarsNumber + ' dollars ', props.stateUpload.centsNumber + ' cents']}/>
        }
        {isDisplayedModalTimeLapse ? 
            <ModalTwiceInputsNumber message={'max days 60 with 23 hours'} closeClickHandler={setIsDisplayedModalTimeLapseFalse} inputsProps={[{labelText:'days', value: props.stateUpload.daysNumber, changeHandler: setDaysValue}, {labelText:'hours', value:props.stateUpload.hoursNumber, changeHandler: setHoursValue}]}/>
            : 
            <FloatingLabel iconSvg={SvgTimeLapse} name="Time lapse" clickHandler={setIsDisplayedModalTimeLapseTrue} value={[props.stateUpload.daysNumber + ' days ', props.stateUpload.hoursNumber + ' hours']}/>
        }
        <div className="actions">
            <button className="prev" onClick={continuePrevStep}>prev</button>
            <button className="upload">upload</button>
        </div>
        </>
    )
}
export default StepTwo