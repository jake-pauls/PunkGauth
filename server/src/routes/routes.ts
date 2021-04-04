import "dotenv/config";
import { Application, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

const posts = [
    {
      username: 'Isaac',
      pinnedLocation: 'somewhere.blockchain'
    },
    {
      useername: 'suckMcSucky',
      pinnedLocation: 'idk'
    }
  ]
  

export class Routes {
    public routes(app: Application) : void {        
        app.route('/pgapi/ping').get((req: Request, res: Response) => {
            res.status(200).send({
                ping: "pong"
            })
        });

        app.route('/posts').get((req: Request, res: Response) => {
            res.status(200).send(res.json(posts));
        });

        app.route('/login').post((req: Request, res: Response) => {
            //Auth User
            const username = req.body.username;
            const user = { name: username };
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string);
            res.json({ accessToken: accessToken })
        });
    }
}

