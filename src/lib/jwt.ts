import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption{
    expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION : SignOption = {
    expiresIn: "1h",
};

export function signJwtAccessToken(payload: JwtPayload, options: SignOption=DEFAULT_SIGN_OPTION){
    const secrect_key = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secrect_key!, options);
    return token;
}

export function verifyJwtAccessToken(token: string){
    try {
        const secrect_key = process.env.SECRET_KEY;
        const payload = jwt.verify(token, secrect_key!);
        return payload as JwtPayload;
    } catch (error) {
        console.log(error);
        return null;
}
}