import "dotenv/config";
import { Application, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
// @ts-ignore
import { createNewNFT } from "../punkmint/operations";


const posts = [
    {
      username: 'Isaac',
      pinnedLocation: 'somewhere.blockchain'
    },
]
  
export class Routes {
    public routes(app: Application) : void {        

        // Test Endpoint
        app.route("/pgapi/ping").get((_req: Request, _res: Response) => {
            _res.status(200).send({
                ping: "pong"
            })
        });

        // JWT Endpoints
        app.route("/pgapi/posts").get((_req: Request, _res: Response) => {
            _res.status(200).send(_res.json(posts));
        });

        app.route("/pgapi/jwt").post((_req: Request, _res: Response) => {
            //Auth User
            const username = _req.body.username;
            const user = { name: username };
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string);
            _res.json({ accessToken: accessToken })
        });

        // NFT/IPFS Endpoints
        app.route("/pgapi/createNFT/:resourcePath/:options").get((_req: Request, _res: Response) => {
            createNewNFT(_req.params.resourcePath, _req.params.options);
        });
    }
}

