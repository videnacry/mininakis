import { createContext } from "react";

const ContextImages = createContext({
    imagesState: {
        images: [{name: 'loading', date: '08/08/2021', src: 'https://drive.google.com/file/d/1W9E6GAJRxQtpaAKnfgIpFazkispn7uRO/view?usp=sharing'}],
        sortedProperty: 'loading',
        sortDirection: 'loading'
    }, sortOptions: {
        byProperty: [
            {name: 'loading', sortHandler: () => {}}
        ],
        byDirection: [
            {name: 'loading', value: 'loading', sortHandler: () => {}}
        ]
    }
})

export default ContextImages