import "reflect-metadata"
import app from "./app"
import {AppDataSourse} from "./db"


/*async function main() {
    try {
      await AppDataSource.initialize();
      console.log("Database connected");
      app.listen(process.env.PORT);
      console.log(`server is listening on port`, process.env.PORT);
    } catch (error) {
      console.error(error);
    }
  }
  main();*/
  



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
