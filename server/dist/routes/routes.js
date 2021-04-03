"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
class Routes {
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send({
                ping: "pong"
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map