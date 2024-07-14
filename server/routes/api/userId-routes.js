const router = require('express').Router();
const { verifyTokenMiddleware } = require('../../utilities/auth');

const {
  createUserId,
  getUserId,
  saveUserId,
} = require('../../controllers/userId-controller');

router.route('/').get(createUserId); // get, /api/user-id
router.route('/:token').get(verifyTokenMiddleware, getUserId); // get, /api/user-id/:token
router.route('/save').post(saveUserId); // post, /api/user-id/save

module.exports = router;  