import { Tag } from '../tags'
import './index.css'
const title = 'tag'
const options = ['electronics', 'mechanics', 'toys', 'furniture', 'clothes', 'art', 'music', 'food']

type propsTagsModal = {closeClickHandler: () => void, tags:Tag[], tagClickHandler: (tagId:number) => void}
const TagsModal = (props:propsTagsModal) => {
    return(
        <div className="tags-modal">
            <div className="background-filter"/>
            <div className="header">
                <p className="title">Select a tag!</p>
                <button className="close" onClick={props.closeClickHandler}>&times;</button>
            </div>
            <h1 className="title">
                {title}
                {props.tags.map((tag, index) => {
                    const radians = (((2*Math.PI)/props.tags.length)*(index+1)) + 1
                    const style = {transform: `translate(${Math.cos(radians)*22}vw, ${(Math.sin(radians)*18)-4}vh)`}
                    return <h1 className="tag" key={tag.name+index} style={style} onClick={() => props.tagClickHandler(tag.id)}>{tag.name}</h1>
                })}
            </h1>
        </div>
    )
}

export default TagsModal