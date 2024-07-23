const router = require('express').Router();

const {
  getAttendanceData,
} = require('../../controllers/attendance-controller');

router.route('/').post(getAttendanceData); // get, /api/attendance

module.exports = router;