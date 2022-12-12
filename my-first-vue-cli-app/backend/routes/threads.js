const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const threadCtrl = require('../controllers/threads');
const multer = require('../middleware/multer-config');


router.post('/new', auth, multer, threadCtrl.addThread);
router.get('/', auth, threadCtrl.getThread);
router.get('/:id', auth, threadCtrl.getOneThread);



module.exports = router;