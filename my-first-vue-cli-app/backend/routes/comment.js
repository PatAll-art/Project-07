const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');

router.post('/new', auth, commentCtrl.postComment);
router.get('/:id', auth, commentCtrl.getComment);


module.exports = router;