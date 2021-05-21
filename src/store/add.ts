import _ from 'lodash'
import { logger } from '../logger'
import { Nouns } from '../models/noun-list'

// export const addNouns = (db:Promise<Function>, nounArray: Nouns[]):void => {
export const addNouns = async (db: any, nounArray: Nouns[]): Promise<void> => {
    
    let index: number = 1
    const arrayLength = nounArray.length
    
    try {
        logger.info('Adding documents to db')
        for (const nounObj of nounArray) {
            logger.info(`Adding document ${index} of ${arrayLength}`)
            await db.collection('common-nouns').add(nounObj)
            ++index
        }

        logger.info('All Done!')

    } catch (err) {
        logger.error(`Failed to load data: "${err.message}"`);
        throw err
    }
}