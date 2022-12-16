import "reflect-metadata"
import app from "./app"
import {AppDataSourse} from "./db"

async function main () {
    try {
        await AppDataSourse.initialize ();
        console.log('Database conected')
        app.listen(300)
        console.log('Server is listen on port', 300)
    } catch(error) {
        console.error(error)
    }
}
 main();
