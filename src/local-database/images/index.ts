import ImageType from '../../models/images/imageType'
import imageDatabase from './database'

async function getImages () {
    const images: ImageType[] = []
    const imagesResponse = await Promise.allSettled(
        imageDatabase.map(image => fetch(image.src))
    )
    const imagesBlobPromises = getPropertiesOfPromiseSettledResultArray(imagesResponse, 'value')
    const imagesBlobResponse = await Promise.allSettled(imagesBlobPromises)
    const imagesBlob = getPropertiesOfPromiseSettledResultArray(imagesBlobResponse, 'value')
    imagesBlob.forEach((imageBlob, index) => {
        const imageLoadedSrc = imageBlob.url
        const image = new ImageType(imageLoadedSrc, imageDatabase[index].name, imageDatabase[index].date)
        images.push(image)
    })
    return images
}
function getPropertiesOfPromiseSettledResultArray (promiseSettledResultArray: PromiseSettledResult<any>[], property: string) {
    const propertiesOfPromiseSettledResultArray = []
    for (let index = 0; promiseSettledResultArray.length > index; index++) {
        const promiseSettledResultEntries = Object.entries(promiseSettledResultArray[index])
        const promiseSettledResultEntry = promiseSettledResultEntries.find(entry => entry[0] === property)
        if (promiseSettledResultEntry)
            propertiesOfPromiseSettledResultArray.push(promiseSettledResultEntry[1])
    }
    return propertiesOfPromiseSettledResultArray
}

export default getImages