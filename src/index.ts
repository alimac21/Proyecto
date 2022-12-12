import "reflect-metadata"
import app from "./app"
import {AppDataSourse} from "./db"

async function main () {
    try {
        await AppDataSourse.initialize ();
        console.log('Database conected')
        app.listen(3000)
        console.log('Server is listen on port', 3000)
    } catch(error) {
        console.error(error)
    }
}
 main();
