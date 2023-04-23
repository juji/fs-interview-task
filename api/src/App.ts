import express from "express";
import cors from "cors";
import routes from '@/routes'
import { auth } from 'express-openid-connect'
import outh0 from '@/lib/auth0.json'


const port = 3333

class App {

  static app = express();

  static async bootstrap(){

    this.app.set('trust proxy',true)
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(auth(outh0));
    this.app.use(routes);

  }

  static async listen(){

    this.app.listen( port, () => {
      console.log(`API listening on ${port}`);
    })

  }

}

export default App
