import { Request, Response } from "express";
import { User } from "../entities/user";
import { JwtPayload, sign } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: string | JwtPayload;
}

export const loginCtrl = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.createQueryBuilder("i")
    .where("LOWER(i.email) = LOWER(:email)", { email })
    .getOne();

    if (!user) {
        return res.status(404).json({ msg: 'user not found '});
    }

    const validate = await user?.validatePassword(password);

    if (!validate) {
        return res.status(401).json({ msg: 'incorrect password' });
    }

    const payload = {
        id: user?.id,
        email: user?.email,
        created: user?.createdAt
    }

    const jwt = sign(payload, `${"jwt-t0k3n-s3cr3t"}`, { expiresIn: `${'24h'}` });

    Object.assign(payload, { jwt })

    return res.status(200).json( { data:payload } );
}


export const meCtrl = async (req: any, res: Response) => {
    const user = await User.createQueryBuilder("i")
    .leftJoinAndSelect("i.person", "person")
    .where("LOWER(i.email) = LOWER(:email)", { email: req.user.email })
    .getOne();

    return res.status(200).json( { data:user } );
}


export const logoutCtrl = async (req: Request, res: Response) => {
    return res.status(200).json( {logout:true} );
}