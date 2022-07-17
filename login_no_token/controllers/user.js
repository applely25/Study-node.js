const { User } = require("../models");
const crypto = require("crypto");


// function generateRandomCode(n) {  //랜덤 salt값 생성
//     let str = "";
//     for(let i = 0; i < n; i++) {
//         str += Math.floor(Math.random() * 10);
//     }
//     return this;
// }

// const salt = generateRandomCode();

const salt = 243253;

console.log(salt);

const signUp = async(req, res) => {
    const { email, name, password } = req.body;

    const hashPassWord = crypto
        .createHash('sha512')
        .update(password + salt)
        .digest('hex');
    
    try{
        await User.create({
                email,
                name,
                password : hashPassWord,
            });
        res.status(200).json({
            message: "성공"
        });
    } catch(err){
        res.status(409).json({
            message: "아이디 중복"
        });
        console.error(err);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const hashPassWord = crypto
        .createHash('sha512')
        .update(password + salt)
        .digest('hex');

    try{
        const user = await User.findOne({
            where: {
                email,
                },
            });
            if(user.password === hashPassWord) {
                 res.status(200).json({
                message: "로그인 성공",
            });
        } else {
            res.status(403).json({
                message: "로그인 실패",
            });
        }
    } catch(err){
        console.error(err);
        res.status(400).json({
            message: "존재하지 않은 유저",
        });
    }
};

module.exports = {
    signUp,
    login,
};