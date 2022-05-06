import FloatingLabel from './floating-label'

import {ReactComponent as EmailSvg} from './email.svg'
import {ReactComponent as PasswordSvg} from './password.svg'
import { ReactComponent as UserSvg } from './user.svg'

import './index.css'

type typeProps = {goSignIn:()=>void}
const SignUp = (props:typeProps) => {
    
    return(
        <form className="login_form-section" onSubmit={(e) => e.preventDefault()}>
            <div className="filter"/>
            <button className="register" onClick={props.goSignIn}>Log in</button>
            <FloatingLabel iconSvg={<UserSvg fill="#080808" width="1.8em" height="1.8em"/>} name="username" type="text"/>
            <FloatingLabel iconSvg={<EmailSvg fill="#080808" width="1.8em" height="1.8em"/>} name="email" type="email"/>
            <FloatingLabel iconSvg={<PasswordSvg fill="#080808" width="1.8em" height="1.8em"/>} name="password" type="password"/>
            <button className="signin">Sign up</button>
            <button className="forgot-password">Forgot yout password?</button>
        </form>
    )
}

export default SignUp