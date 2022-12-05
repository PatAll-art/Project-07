const db = require("../helpers/db");
const { use } = require("../app");
const Comment = require("../models/comment");

exports.postComment = (req, res, next) => {
  const comment = new db.Comment({
    userName: req.body.userName,
    text: req.body.text,
    threadId: req.body.threadId,
  });
  comment
    .save()
    .then(() => {
      res.status(201).json({
        message: "Comment was added!",
      });
    })
    .catch((error) => {
      res.status(500).son({
        error: error,
      });
    });
};

exports.getComment = (req, res, next) => {
  db.Comment
    .findAll({
      where: { threadId: req.params.id },
    })
    .then((comment) => {
      res.status(201).json(comment);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
