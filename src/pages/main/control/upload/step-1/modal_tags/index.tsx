import { Tag } from '../../tags'
import './index.css'

type propsModalTags = {closeClickHandler: () => void, tagSelected:Tag, tagClickHandler: (tagId:number) => void, tagSelectedClickHandler: () => void}
const ModalTags = (props:propsModalTags) => {
    return(
        <div className="modal-tags">
            <div className="background-filter"/>
            <div className="header">
                <p className="title">Select a tag</p>
                <button className="close" onClick={props.closeClickHandler}>&times;</button>
            </div>
            <h1 className="title">
                <span onClick={props.tagSelectedClickHandler}>{props.tagSelected.name}</span>
                {props.tagSelected.children.map((tag, index) => {
                    let style
                    const radians = (((2*Math.PI)/props.tagSelected.children.length)*(index+1)) + 1
                    if (window.screen.availWidth < 320)
                        style = {transform: `translate(${(Math.cos(radians)*32)}vw, ${(Math.sin(radians)*24)-2}vh)`}
                    else if (window.screen.availWidth < 600)
                        style = {transform: `translate(${(Math.cos(radians)*30)}vw, ${(Math.sin(radians)*20)-2}vh)`}
                    else
                        style = {transform: `translate(${Math.cos(radians)*22}vw, ${(Math.sin(radians)*18)-4}vh)`}
                    return <h1 className="tag" key={tag.name+index} style={style} onClick={() => props.tagClickHandler(tag.id)}>{tag.name}</h1>
                })}
            </h1>
        </div>
    )
}

export default ModalTags