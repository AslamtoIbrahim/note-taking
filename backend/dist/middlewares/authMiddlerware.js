"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
require("./types/express");
const auth_1 = require("../lib/auth");
const node_1 = require("better-auth/node");
const authenticateUser = async (req, res, next) => {
    const session = await auth_1.auth.api.getSession({
        headers: (0, node_1.fromNodeHeaders)(req.headers),
    });
    if (!session?.user) {
        return res.status(401).json({ error: "You are not signed in" });
    }
    req.user = session.user;
    next();
};
exports.authenticateUser = authenticateUser;
