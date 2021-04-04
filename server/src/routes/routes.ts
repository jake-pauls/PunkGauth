import "dotenv/config";
import { Application, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { exec } from "child_process";

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
        app.route("/pgapi/createNFT").get((_req: Request, _res: Response) => {
            const brownie = exec("./run-brownie.sh", (_error, _stdout, _stderr) => {
                if (_error)
                    console.log(_error.toString());

                console.log(_stdout.toString());
            });
            
            brownie.on("error", (_error) => {
                console.log("An error occurred generating the NFT")
                console.log(_error);
            });
        
            brownie.on("exit", (_code, _signal) => {
                console.log('NFT process exited with ' + `code ${_code} and signal ${_signal}`); 
                _res.end("end");
            });
        });
    }
}

