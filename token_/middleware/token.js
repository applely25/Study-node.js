const jwt = require('jsonwebtoken');
const { request } = require('../routes/user');

const tokenMiddleware = async(req, res, next) => {
    const token = req.header["access-token"];
    if(!token){
        res.status(403).json({
            message : "로그인 되어있지 않음",
        });
    }

    try{
        await jwt.verify(token, req.app.get("jwt-secrect"), (err, decode) => {
            if(err) throw new Error(err.message);
            request.decode = decoded;
            next();
        });
    } catch(err){
        request.status(401).json({
            message : "로그인 되어있지 않음",
        });
    }
};

module.exports = {
    tokenMiddleware
};