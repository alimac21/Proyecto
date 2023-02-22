import * as express from 'express';
import * as jwt from 'jsonwebtoken';

interface RequestExt extends express.Request {
    user?: string | jwt.JwtPayload;
}

export const authentication = (req: RequestExt, res: express.Response, next: express.NextFunction) => {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            const error = { msg: 'Token not found' };
            return res.status(401).json( error );
        }

        const jwtdata:any = jwt.verify(token, "jwt-t0k3n-s3cr3t")

        if (!jwtdata) {
            const error = { msg: 'error token' };
            res.status(403).json( error );
        } else {
            req.user = jwtdata
            next();
        }

    } catch (err) {
        const errorInvalid = { msg: 'Invalid Token' };
        res.status(401).json( errorInvalid );
    }
}
