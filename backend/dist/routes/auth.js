"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../lib/auth");
const node_1 = require("better-auth/node");
const authRouter = express_1.default.Router();
authRouter.get('/api/me', async (req, res) => {
    try {
        const session = await auth_1.auth.api.getSession({
            headers: (0, node_1.fromNodeHeaders)(req.headers)
        });
        if (!session)
            return res.status(401).json({ error: "you are not signed in" });
        res.json(session);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
authRouter.all('/api/auth/{*any}', (0, node_1.toNodeHandler)(auth_1.auth));
exports.default = authRouter;
