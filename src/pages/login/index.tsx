import Form from './form'

import backgroundSrc from './5ant.jpg'

import './index.css'

type propsLogin = {goMain: () => void}
const Login = (props: propsLogin) => {
    return(
        <div className="login-page">
            <div className="background-image">
                <img src={backgroundSrc} alt="" height="100%"/>
            </div>
            <h1 className="title" onClick={() => props.goMain()}>Mininakis</h1>
            <Form/>
        </div>
    )
}

export default Login