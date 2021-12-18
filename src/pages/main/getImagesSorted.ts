import ImageType from "../../models/images/imageType"

const sortImagesSorted = (pImages: ImageType[], pSortPropertyName: string, pIsAscending: boolean, pIsMixDirection: boolean): ImageType[] => {
    const sortedImages = [...pImages]
    sortedImages.sort((firstImage, secondImage) => {
        const firstImagePropertyValue = getPropertyValue(firstImage, pSortPropertyName)
        const secondImagePropertyValue = getPropertyValue(secondImage, pSortPropertyName)
        let value = 0
        if (firstImagePropertyValue > secondImagePropertyValue) value = getNumberWithOpositeSign(1, pIsAscending)
        else if (firstImagePropertyValue < secondImagePropertyValue) value = getNumberWithOpositeSign(-1, pIsAscending)
        return value
    })
    if (pIsMixDirection) {
        const isPairLength = (sortedImages.length % 2 === 0) ? true : false
        const firstHalfImages = sortedImages.splice(0, isPairLength ? sortedImages.length/2 : (sortedImages.length-1)/2)
        const sortedImagesMixDirection = []
        firstHalfImages.forEach((image, index) => {
            sortedImagesMixDirection.push(sortedImages[index])
            sortedImagesMixDirection.push(image)
        })
        if (isPairLength) sortedImagesMixDirection.push(sortedImages[sortedImages.length-1])
        return sortedImagesMixDirection
    }
    return sortedImages
}
const getPropertyValue = (pImage: ImageType, pPropertyName: string): string[] => {
    const entries: [string, any][] = Object.entries(pImage)
    const property = entries.find(entry => entry[0] === pPropertyName)
    return property ? property[1] : ''
}
const getNumberWithOpositeSign = (pNumber: number, pChangeSign: boolean) => {
    return (pChangeSign) ? pNumber * -1 : pNumber
}

export default sortImagesSorted