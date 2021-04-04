import "dotenv/config";
import { Application, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

const posts = [
    {
      username: 'Isaac',
      pinnedLocation: 'somewhere.blockchain'
    },
]
  
export class Routes {
    public routes(app: Application) : void {        
        app.route('/pgapi/ping').get((_req: Request, _res: Response) => {
            _res.status(200).send({
                ping: "pong"
            })
        });

        app.route('/pgapi/posts').get((_req: Request, _res: Response) => {
            console.log('posts');
            _res.status(200).send(_res.json(posts));
        });

        app.route('/pgapi/jwt').post((_req: Request, _res: Response) => {
            //Auth User
            const username = _req.body.username;
            const user = { name: username };
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string);
            _res.json({ accessToken: accessToken })
        });
    }
}

