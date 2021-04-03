"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const PORT = 5000;
class Server {
    constructor() {
        this.app = express_1.default();
        this.routes = new routes_1.Routes();
        this.expressConfig();
        this.listen();
        this.routes.routes(this.app);
    }
    expressConfig() {
        this.app.use(express_1.default.static("public"));
    }
    listen() {
        this.app.listen(PORT, () => {
            console.log("Server started locally at https://localhost:" + PORT);
        });
    }
}
exports.default = new Server().app;
//# sourceMappingURL=index.js.map