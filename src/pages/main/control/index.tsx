import { useCallback, useState } from 'react'
import Button from './button'
import Filter from './filter'
import Upload from './upload'

import {ReactComponent as FilterSvg} from './filter.svg'
import {ReactComponent as LogSvg} from './log.svg'
import {ReactComponent as UploadSvg} from './upload.svg'

import './index.css'

type propsControl = {goLogin: () => void}
const Control = (props: propsControl) => {
    const [isVisibleFilter, setIsVisibleFilter] = useState(false)
    const showFilter = useCallback(() => setIsVisibleFilter(true), [])
    const hideFilter = useCallback(() => setIsVisibleFilter(false), [])

    const [isVisibleUpload, setIsVisibleUpload] = useState(false)
    const showUpload = useCallback(() => setIsVisibleUpload(true), [])
    const hideUpload = useCallback(() => setIsVisibleUpload(false), [])

    return(
        <aside className="main_control-section">
            <div className="left-bar"/>
            <div className="top-half">
                <Button IconSvg={LogSvg} text="Log in" clickHandler={props.goLogin} labelText={undefined}/>
            </div>
            <div className="bottom-half">
                <Button IconSvg={FilterSvg} text="Filter" labelText="Filter the posts?" clickHandler={showFilter}/>
                <Button IconSvg={UploadSvg} text="Upload" labelText="Upload your fan art?" clickHandler={showUpload}/>
            </div>
            {isVisibleFilter ? <Filter hideFilter={hideFilter}/> : ''}
            {isVisibleUpload ? <Upload closeHandler={hideUpload}/> : ''}
        </aside>
    )
}

export default Control