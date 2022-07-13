const jwt = require("jsonwebtoken");
const { User } = require("../models");
const crypto = require("crypto");

const salt = 123;

const signUp = async(req, res) => {
    const {name, email, password} = req.body;
    const hashPassWord = crypto
    .createHash('sha256')
    .update(password + salt)
    .digest('hex');
    try{
        await User.create({
            email,
            name,
            password  : hashPassWord,
        });
        res.status(200).json({
            message : "성공"
        });
    } catch(err){
        res.status(409).json({
            message : "아이디 중복"
        });
        console.log(err);
    }
};

const login = async(req, res) => {
    const {email, password} = req.body;
    const secretkey = req.app.get("jwt-secret");

    const hashPassWord = crypto
    .createHash('sha256')
    .update(password + salt)
    .digest('hex');

    try{
        const user = await User.findOne({
            where : {
                email,
            },
        });
        if(user.password === hashPassWord){
            const accessToken = jwt.sign(
                {
                    email : user.email,
                    name : user.name,
                }, secretkey,
                {
                    expiresIn : "1h", //유효시간
                }
            );
            res.status(200).json ({
                message : "로그인 성공",
                accessToken,
            });
        } else {
            res.status(403).json({
                message : "로그인 실패",
            });
        }
    } catch(err){
        console.log(err);
        res.status(400).json({
            message : "존재하지  않는 유저",
        });
    }
};

module.exports = {
    signUp,
    login
};
