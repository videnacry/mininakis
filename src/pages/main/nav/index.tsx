import {ReactComponent as FanartSvg} from './fanart.svg'
import {ReactComponent as PlantSvg} from './plant.svg'
import {ReactComponent as ShopSvg} from './shop.svg'

import './index.css'

const Nav = () => {
    return(
        <nav className="main_nav-section">
            <button className="button">
                <div className="filter"/>
                <div className="text">Fan art</div>
                <i className="icon">
                    <FanartSvg width="100%" height="100%" fill="#181818"/>
                </i>
            </button>
            <button className="button">
                <div className="filter"/>
                <div className="text">Shop</div>
                <i className="icon">
                    <ShopSvg width="100%" height="100%" fill="#181818"/>
                </i>
            </button>
            <button className="button">
                <div className="filter"/>
                <div className="text">Farm</div>
                <i className="icon">
                    <PlantSvg width="100%" height="100%" fill="#181818"/>
                </i>
            </button>
        </nav>
    )
}

export default Nav