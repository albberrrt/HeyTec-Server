import jwt from 'jsonwebtoken'


interface UserData {
    userId: {};
}

export function generateToken(userData: UserData): string {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        throw new Error('JWT_SECRET is not defined in .env file');
    }

    const payload = {
        userId: userData.userId,
    };

    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h'});

    return token;
}