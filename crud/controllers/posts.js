const {Posts} = require('../models');

const create = async(req, res) => {
    const {title, context} = req.body;

    try {
        await Posts.create({
            title,
            context
        });

        res.status(200).json({
            message : "작성 성공"
        });
    } catch(error){
        res.status(400).json({
            message : "작성 실패"
        });
    }
};

const update = async(req, res) => {
    const { id, title, context } = req.body;
    try{
        await Posts.update({
            title,
            context
        },
        {
            where : { id : id }
        });
        res.status(200).json({
            message: "수정 완료"
        });
    } catch(err) {
        res.status(404).json({
            message: "오류"
        });
        console.error(err);
    }
};

const deletePost = async(req, res) => {
    const { id } = req.body;
    try{
        await Posts.destroy({
            where : {id : id}   
        });
        res.status(200).json({
            message : "삭제 완료"
        });
    } catch(err){
        res.status(404).json({
            message : "게시물 없음"
        });
        console.log(err);
    }
};

const readAllPost = async(req, res) => {
    try{
        const posts = await Posts.findAll();
        res.status(200).json({
            posts
        });
    } catch(err){
        res.status(404).json({
            message : "게시물 없음"
        });
        console.log(err);
    }
};

const readOnePost = async(req, res) => {
    const {id} = req.body;
    try{
        const post = await Posts.findOne({
            where : {id : id}
        });
        console.log(post);
        if(post != null){
            res.status(200).json({
                post
            });
        }
        else if(post = null){
            return Error;
        }
    } catch(err){
        res.status(404).json({
            message : "게시물 없음"
        });
        console.log(err);
    }
};


module.exports = { 
    create,
    update,
    deletePost,
    readAllPost,
    readOnePost
};