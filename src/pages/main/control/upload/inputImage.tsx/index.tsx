import { useCallback, useState } from 'react'
import './index.css'

const InputImage = () => {
    const [previewSrc, setPreviewSrc] = useState('')
    const showPreview = useCallback((imgFile:File) => {
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            if (typeof fileReader.result === 'string') setPreviewSrc(fileReader.result)
            console.log(fileReader.result)
        }
        fileReader.readAsDataURL(imgFile)
    }, [])
    return(
        <div className="input-image">
            <div className="preview" style={{backgroundImage: `url(${previewSrc})`}}/>
            <input type="file" id="input-image" onChange={e => {
                if (e.currentTarget.files)
                    showPreview(e.currentTarget.files[0])}
            }/>
            <label htmlFor="input-image">
                <div className="background-filter"/>
                select file
            </label>
        </div>
    )
}

export default InputImage