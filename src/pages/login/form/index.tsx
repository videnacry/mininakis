import { useReducer, useState, useCallback } from "react"
import SignIn from "./signin"
import SignUp from "./signup"

const Form = () => {
    const [formName, setFormName] = useState('sign in')
    const goSignIn = useCallback(() => setFormName('sign in'), [])
    const goSignUp = useCallback(() => setFormName('sign up'), [])
    const getForm = useCallback(() => {
        switch (formName) {
            case 'sign in' : return <SignIn goSignUp={goSignUp}/>
            case 'sign up' : return <SignUp goSignIn={goSignIn}/>
            default : return <SignIn goSignUp={goSignUp}/>
        }
    }, [formName])
    return(
        getForm()
    )
}

export default Form