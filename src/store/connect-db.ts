const Firestore = require('@google-cloud/firestore')
import { logger } from '../logger'

export default async ():Promise<Function>=> {

    try {
        logger.info('...........Connecting to db..........')
        const db = await new Firestore({
            projectId: "learn-german-313307",
            keyFilename: 'firestore-init.json'
        })
        
        return db
    } catch (err) {
        logger.error('There was an error connecting to the db: ', err)
        throw Error (err)
    }
}