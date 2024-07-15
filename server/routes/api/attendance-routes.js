const router = require('express').Router();

const {
  getAttendanceData,
} = require('../../controllers/attendance-controller');

router.route('/').get(getAttendanceData); // get, /api/attendance

module.exports = router;