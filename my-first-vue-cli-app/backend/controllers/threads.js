const db = require('../helpers/db');
const { use } = require('../app');
const Thread = require('../models/threads');


exports.addThread = (req, res, next) => {
    const thread = new db.Thread({
        userName: req.body.userName,
        title: req.body.title,
        text: req.body.text
    });
    thread.save().then(
        () => {
            res.status(201).json({
                message: 'Post was added!'
            });
        }
    ).catch(
        (error) => {
            res.status(500).son({
                error: error
            });
        }
    );
};

exports.getThread = (req, res, next) => {
    db.Thread.findAll()
    .then((thread) => {
        res.status(201).json(thread);
    })
    .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
};

exports.getOneThread = (req, res, next) => {
    db.Thread.findOne({
        where: { id: req.params.id}
    }) .then((thread) => {
        res.status(200).json(thread);
      })
      .catch((error) => {
        res.status(404).json({
          error: error,
        });
      });
  };

