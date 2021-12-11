import { useEffect, useState } from 'react'
import ImageType from '../../../models/images/imageType'
import getImagesColumns from './getImagesColumns'

import './index.css'

type galleryProps = {images: ImageType[], areImagesInGrid: boolean}
const Gallery = (props: galleryProps) => {
    const [images, setImages] = useState(props.images)

    useEffect(() => setImages(props.images), [props.images])

    return(
        <main className="main_gallery-section">
            {getImagesColumns(images, props.areImagesInGrid)}
        </main>
    )
}

export default Gallery