import _, { map, split } from 'lodash'
import fs from 'fs'
import path from 'path'

import { Nouns } from './models/noun-list'



const nounListPath = path.join(__dirname, '../noun-list.txt')

type Article = 'Der' | 'Das' | 'Die'

const findGender = (article: Article): 'm' | 'f' | 'n' => {
    switch (article) {
        case 'Der':
            return 'm'
        case 'Das':
            return 'n'
        case 'Die':
            return 'f'
    }
}

const sortNouns = (data: string[]): Nouns[] => _.map(data, line => {
    const splitArray = line.split(' ')
    
    const word = splitArray[4]
    const gender = findGender(splitArray[3] as Article)
    const plural = `${splitArray[6]} ${splitArray[7]}`
    const translation = splitArray[1]

    return {
        word,
        gender,
        plural,
        translation
    }
})


export default () => {
    const data = fs.readFileSync(nounListPath, 'utf8').split("\n")
    return sortNouns(data) 
}