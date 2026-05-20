const Router = require('express');
const router = new Router();
const itemRouter = require('./itemRouter');
const typeRouter = require('./typeRouter');
const messageRouter = require('./messageRouter');
// const userRouter = require('./userRouter');

router.use('/item', itemRouter);
router.use('/type', typeRouter);
router.use('/message', messageRouter);
// router.use('/user', userRouter);

module.exports = router;
