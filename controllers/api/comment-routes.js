const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const dbCommentData = await Comment.create({
            comment: req.body.comment,
            author_id: req.body.author_id,
            post_id: req.body.post_id,
        });
        return res.status(200).json(dbCommentData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleteCommentData = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json(deleteCommentData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

// router.put("/:id", async (req, res) => {
//     try {
//         const updateResult = await Post.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });
//         return res.status(200).json(updateResult);
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json(err);
//     }
// });

module.exports = router;
