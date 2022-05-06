import getImagesWithBlobSrc from './models/images/getImagesWithBlobSrc'
import ImageType from './models/images/imageType'
import localImages from './local-database/images/product/index'

async function getConfig (pType:'prod' | 'dev', pImages:ImageType[]): Promise<{Images:ImageType[]}> {
    switch (pType) {
        case 'prod' : return {Images: await getImagesWithBlobSrc(pImages)}
        case 'dev' : return {Images: await getImagesWithBlobSrc(localImages)}
        default: return {Images: await getImagesWithBlobSrc(localImages)}
    }
}

export default getConfig