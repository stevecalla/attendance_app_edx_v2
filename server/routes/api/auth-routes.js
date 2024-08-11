const router = require('express').Router();

const { isExpired } = require('../../controllers/auth-controller');

router.route('/').get(isExpired); // get, /api/auth

module.exports = router;