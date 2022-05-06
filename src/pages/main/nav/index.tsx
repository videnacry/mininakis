import { useContext } from 'react'

import Context from '../../../context'

import beron from '../../../local-database/images/8eron'
import sant from '../../../local-database/images/5ant'
import { imagesDefault } from '../../../App'

import {ReactComponent as FanartSvg} from './fanart.svg'
import {ReactComponent as PlantSvg} from './plant.svg'
import {ReactComponent as ShopSvg} from './shop.svg'

import './index.css'

const Nav = () => {
    const context = useContext(Context)

    return(
        <nav className="main_nav-section">
            <button className="button" onClick={()=>context.setImages(sant)}>
                <div className="filter"/>
                <div className="text">5ant</div>
                <i className="icon">
                    <FanartSvg width="100%" height="100%" fill="#181818"/>
                </i>
            </button>
            <button className="button" onClick={()=>context.setImages(beron)}>
                <div className="filter"/>
                <div className="text">8eron</div>
                <i className="icon">
                    <ShopSvg width="100%" height="100%" fill="#181818"/>
                </i>
            </button>
            <button className="button" onClick={()=>context.setImages(imagesDefault)}>
                <div className="filter"/>
                <div className="text">Other</div>
                <i className="icon">
                    <PlantSvg width="100%" height="100%" fill="#181818"/>
                </i>
            </button>
        </nav>
    )
}

export default Nav