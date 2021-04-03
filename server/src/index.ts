import express from "express";
import { Routes } from "./routes/routes";

// Environment
const PORT = 5000;

class Server {
    public app: express.Application = express();
    public routes: Routes = new Routes();

    constructor() {
        this.expressConfig();
        this.listen();
        this.routes.routes(this.app);
    }

    private expressConfig() : void {
        // Serve static content on server 
        this.app.use(express.static("public"));
    }

    private listen() : void {
        this.app.listen(PORT, () => {
            console.log("Server started locally at https://localhost:" + PORT);
        });
    }
}

export default new Server().app;