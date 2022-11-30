const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const threadCtrl = require('../controllers/threads');

router.post('/new', auth, threadCtrl.addThread);
router.get('/', auth, threadCtrl.getThread);
router.get('/:id', auth, threadCtrl.getOneThread);


module.exports = router;