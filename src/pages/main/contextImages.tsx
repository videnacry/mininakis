import { createContext, FunctionComponent, SVGProps } from "react";

import { ReactComponent as SvgLoading } from "./calendar-event.svg";

const ContextImages = createContext({
    imagesState: {
        images: [{name: 'loading', date: '08/08/2021', src: 'https://drive.google.com/file/d/1W9E6GAJRxQtpaAKnfgIpFazkispn7uRO/view?usp=sharing'}],
        sortedProperty: 'loading',
        sortDirection: 'loading'
    }, sortOptions: {
        byProperty: [
            {name: 'loading', sortHandler: () => {}, icon: SvgLoading}
        ],
        byDirection: [
            {name: 'loading', value: 'loading', sortHandler: () => {}, icon: SvgLoading}
        ]
    }
})

export default ContextImages