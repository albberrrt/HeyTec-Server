import jwt from 'jsonwebtoken'


interface UserData {
    userId: {};
    username: string;
    email: string;
}

export function generateToken(userData: UserData): string {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        throw new Error('JWT_SECRET is not defined in .env file');
    }

    const payload = {
        userId: userData.userId,
        username: userData.username,
        email: userData.email,
    };

    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h'});

    return token;
}