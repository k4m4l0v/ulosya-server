const Router = require('express');
const router = new Router();
const messageController = require('../controllers/messageController');

router.post('/', messageController.sendMessage);
router.post('/callback', messageController.callback);

module.exports = router;
