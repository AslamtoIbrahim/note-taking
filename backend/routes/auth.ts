import express from "express";
import { auth } from "../lib/auth.ts";
import { fromNodeHeaders, toNodeHandler } from "better-auth/node";

const authRouter = express.Router();


authRouter.get('/api/me', async (req, res) =>{
    try {
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers)
        })
        if(!session) return res.status(401).json({error: "you are not signed in"})
    
        res.json(session)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

authRouter.all('/api/auth/{*any}', toNodeHandler(auth))

export default authRouter;
