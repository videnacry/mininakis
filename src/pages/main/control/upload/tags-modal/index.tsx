import { Tag } from '../tags'
import './index.css'

type propsTagsModal = {closeClickHandler: () => void, tagSelected:Tag, tagClickHandler: (tagId:number) => void, tagSelectedClickHandler: () => void}
const TagsModal = (props:propsTagsModal) => {
    return(
        <div className="tags-modal">
            <div className="background-filter"/>
            <div className="header">
                <p className="title">Select a tag</p>
                <button className="close" onClick={props.closeClickHandler}>&times;</button>
            </div>
            <h1 className="title">
                <span onClick={props.tagSelectedClickHandler}>{props.tagSelected.name}</span>
                {props.tagSelected.children.map((tag, index) => {
                    const radians = (((2*Math.PI)/props.tagSelected.children.length)*(index+1)) + 1
                    const style = {transform: `translate(${Math.cos(radians)*22}vw, ${(Math.sin(radians)*18)-4}vh)`}
                    return <h1 className="tag" key={tag.name+index} style={style} onClick={() => props.tagClickHandler(tag.id)}>{tag.name}</h1>
                })}
            </h1>
        </div>
    )
}

export default TagsModal