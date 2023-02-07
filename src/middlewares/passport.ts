import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../entities/user';
import 'dotenv/config';

export const passportStrategy = new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SESSION_SECRET,
    ignoreExpiration: false
}, async (payload, done) => {
    try {
        const user = User.findOne({ where: { id: payload.id }});

        if (!user) {
            return done(null, false);
        }

        return done(null, user)
    } catch (error) {
        console.log(error);
    }
});