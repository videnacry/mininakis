import './index.css'

const Nav = () => {
    return(
        <nav className="main_nav-section">
            <button className="button">
                <div className="filter"/>
                <div className="text">Fan art</div>
            </button>
            <button className="button">
                <div className="filter"/>
                <div className="text">Shop</div>
            </button>
            <button className="button">
                <div className="filter"/>
                <div className="text">Farm</div>
            </button>
        </nav>
    )
}

export default Nav