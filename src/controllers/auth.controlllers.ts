import { Request, Response } from "express";
import { User } from "../entities/user";
import { sign } from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.createQueryBuilder("i")
    .where("LOWER(i.email) = LOWER(:email)", { email })
    .getOne();

    if (!user) {
        res.status(404).json({ msg: 'user not found '});
    }

    const validate = await user?.validatePassword(password);

    if (!validate) {
        res.status(401).json({ msg: 'incorrect password' });
    }

    const payload = {
        id: user?.id,
        email: user?.email,
        created: user?.createdAt
    }

    const jwt = sign(payload, `${process.env.JWT_SESSION_SECRET}`, { expiresIn: `${process.env.JWT_EXPIRED}` });

    Object.assign(payload, { jwt })

    return res.status(200).json(payload);
};
