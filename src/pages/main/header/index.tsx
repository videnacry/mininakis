import {ReactComponent as GridSvg} from './grid.svg'
import {ReactComponent as SquareSvg} from './square.svg'
import './index.css'

type headerProps = {setImagesInGrid: () => void, setImagesInCascade: () => void, goMain: () => void}
const Header = (props: headerProps) => {
    return(
        <header className="main_header-section">
            <div className="head">    
                <h1 className="title" onClick={props.goMain}>Mininakis</h1>
                <div className="bar"/> 
            </div>
            <div className="menu">
                <p className="text">Do you want to change the posts view?</p>
                <p className="text">Change posts view?</p>
                <button className="button" onClick={props.setImagesInCascade}>
                    <SquareSvg className="icon"/>
                </button>
                <button className="button" onClick={props.setImagesInGrid}>
                    <GridSvg className="icon"/>
                </button>
            </div>
        </header>
    )
}
export default Header