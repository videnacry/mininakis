import ImageType from "../../../models/images/imageType"

const getImagesColumns = (pImages: ImageType[], areImagesInGrid: boolean) => {
    if (!areImagesInGrid) return getImagesUniqueColumn(pImages)
    return getImagesThreeColumns(pImages)
}
const getImagesUniqueColumn = (pImages: ImageType[]) => {
    return(
        <div className="images-column-unique">
            {pImages.map(image => 
                <div className="big-image" key={image.src}>
                    <div className="frame">
                        <div className="image" data-date={image.date} style={{backgroundImage: `url(${image.src})`}} />
                    </div>
                </div>
            )}
        </div>
    )
}
const getImagesThreeColumns = (pImages: ImageType[]) => {
    const thirdOfLength = Math.trunc(pImages.length/3)
    const columns = [
        pImages.slice(0, thirdOfLength),
        pImages.slice(thirdOfLength, thirdOfLength*2),
        pImages.slice(thirdOfLength*2, pImages.length+1)
    ]
    return( columns.map(column => 
            <div className="images-column-third">
                {column.map(image => 
                    <div className="small-image" key={image.src}>
                        <div className="frame">
                            <div className="image" data-date={image.date} style={{backgroundImage: `url(${image.src})`}} />
                        </div>
                    </div>
                )}
            </div>
        )
    )
}

export default getImagesColumns