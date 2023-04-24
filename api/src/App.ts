import express from "express";
import cors from "cors";
import routes from '@/routes'
import errorHandler from '@/lib/errorHandler'

import prisma from "@/lib/prisma";

class App {

  static app = express();

  static async bootstrap(){

    this.app.set('trust proxy',true)
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(routes);
    this.app.use(errorHandler);

  }

  static async listen( port: number|null ){

    // If the Node process ends, close the db connection
    process.on('SIGINT', async function() {
      await prisma.$disconnect()
    });

    this.app.listen( port || 3333, () => {
      console.log(`API listening on ${port || 3333}`);
    })

  }

}

export default App
