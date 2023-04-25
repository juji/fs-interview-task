import express, { Application } from "express";
import cors from "cors";
import errorHandler from '@/lib/errorHandler'

import routes from '@/routes'
import prisma from "@/lib/prisma";
import logger from "@/lib/logger";

class App {

  static app:Application = express();

  static bootstrap(){

    this.app.set('trust proxy',true)
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(logger);
    this.app.use(routes);
    this.app.use(errorHandler);

    return this.app

  }

  static async exiting(){

    // If the Node process ends, close the db connection
    await prisma.$disconnect()
    console.log('DONE: prisma.$disconnect')

  }

  static async listen( port: number|null ){

    process.on('SIGINT', async () => {
      console.log('SIGINT received')
      await this.exiting()
      process.exit()
    });

    this.app.listen( port || 3333, () => {
      console.log(`API listening on ${port || 3333}`);
    })

  }

}

export default App
