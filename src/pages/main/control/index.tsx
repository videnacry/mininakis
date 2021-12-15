import {ReactComponent as FilterSvg} from './filter.svg'
import {ReactComponent as LogSvg} from './log.svg'
import {ReactComponent as UploadSvg} from './upload.svg'

import './index.css'

type propsControl = {goLogin: () => void}
const Control = (props: propsControl) => {
    
    return(
        <aside className="main_control-section">
            <div className="left-bar"/>
            <div className="top-half">
                <button className="button" onClick={() => props.goLogin()}>
                    <div className="filter"/>
                    <div className="text">Log in</div>
                    <i className="icon">
                        <LogSvg width="100%" height="100%" fill="#181818"/>
                    </i>
                </button>
            </div>
            <div className="bottom-half">
                <div className="button-labeled">
                    <label htmlFor="filter" className="label">Filter the posts?</label>
                    <button id="filter" className="button">
                        <div className="filter"/>
                        <div className="text">Filter</div>
                        <i className="icon">
                            <FilterSvg width="100%" height="100%" fill="#181818"/>
                        </i>
                    </button>
                </div>
                <div className="button-labeled">
                    <label htmlFor="upload" className="label">Upload your fan art?</label>
                    <button id="upload" className="button">
                        <div className="filter"/>
                        <div className="text">Upload</div>
                        <i className="icon">
                            <UploadSvg width="100%" height="100%" fill="#181818"/>
                        </i>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Control