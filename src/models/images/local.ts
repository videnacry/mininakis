import ImageType from './imageType'
import ModalImages from './interface'
import getImages from '../../local-database/images'
class LocalImages implements ModalImages {
    database: ImageType[] = []
    isDatabaseInitialized: Promise<void>

    constructor () {
        this.isDatabaseInitialized = this.initializeDatabase()
    }
    /**
     * already call in the constructor to get the value of this.database
     */
    initializeDatabase = async () => {
        this.database = await getImages()
    }
    getAllImagesAsync =  async (): Promise<ImageType[]> => {
        await this.isDatabaseInitialized
        return this.database
    }
}
export default LocalImages