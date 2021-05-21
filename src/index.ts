import * as dotenv from 'dotenv'
import { logger } from './logger'
import { connectDb, addNouns } from './store'
import createNounArray from './noun-list'

dotenv.config()


connectDb()
    .then(db => {
        const nounArray = createNounArray()
        addNouns(db, nounArray)   
    })
    .catch(e => {
        logger.error(`Failed to load data: "${e.message}"`);
        process.exit(1);
    });

