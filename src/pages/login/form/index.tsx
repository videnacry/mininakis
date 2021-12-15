import FloatingLabel from './floating-label'

import {ReactComponent as EmailSvg} from './email.svg'
import {ReactComponent as PasswordSvg} from './password.svg'
import gmailSrc from './gmail.png'
import outlookSrc from './outlook.png'

import './index.css'

const Form = () => {
    
    return(
        <form className="login_form-section" onSubmit={(e) => e.preventDefault()}>
            <div className="filter"/>
            <button className="register">Register</button>
            <FloatingLabel iconSvg={<EmailSvg fill="#080808" width="1.8em" height="1.8em"/>} name="email" type="email"/>
            <FloatingLabel iconSvg={<PasswordSvg fill="#080808" width="1.8em" height="1.8em"/>} name="password" type="password"/>
            <button className="signin">Sign in</button>
            <button className="forgot-password">Forgot yout password?</button>
            <div className="emails">
                <button className="gmail">
                    <img src={gmailSrc} alt="gmail icon" width="40vmin"/>
                </button>
                <button className="outlook">
                    <img src={outlookSrc} alt="outlook icon" width="40vmin"/>
                </button>
            </div>
        </form>
    )
}

export default Form