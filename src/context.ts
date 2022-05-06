import { createContext, Dispatch, SetStateAction } from 'react'
import ImageType from './models/images/imageType'

const images:ImageType[] = []
type contextType = {images:ImageType[], setImages:Dispatch<SetStateAction<ImageType[]>>}
const initialContext:contextType = {images,setImages:()=>{}}
const Context = createContext(initialContext)

export default Context