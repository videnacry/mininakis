import './index.css'

type footerProps = {areImagesInGrid: boolean}
const Footer = (props: footerProps) => {
    return(
        <footer className="main_footer-section">
            <div className="bar"/>
            <div className={"bar " + (props.areImagesInGrid ? "short" : "long")}/>
            <div className="bar"/>
        </footer>
    )
}

export default Footer