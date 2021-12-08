import ImageType from './imageType'

interface IModelImages {
    getAllImagesAsync (): Promise<ImageType[]>
}

export default IModelImages