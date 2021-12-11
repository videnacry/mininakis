import './index.css'

const Control = () => {
    
    return(
        <aside className="main_control-section">
            <div className="left-bar"/>
            <div className="top-half">
                <button className="button">
                    <div className="filter"/>
                    <div className="text">Log out</div>
                </button>
            </div>
            <div className="bottom-half">
                <div className="button-labeled">
                    <label htmlFor="filter" className="label">Filter the posts?</label>
                    <button id="filter" className="button">
                        <div className="filter"/>
                        <div className="text">Filter</div>
                    </button>
                </div>
                <div className="button-labeled">
                    <label htmlFor="upload" className="label">Upload your fan art?</label>
                    <button id="upload" className="button">
                        <div className="filter"/>
                        <div className="text">Upload</div>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Control