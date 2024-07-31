const router = require('express').Router();

const {
  getStudentById,
  saveStudents
} = require('../../controllers/students-controller');

router.route('/').get(getStudentById); // get, /api/students
router.route('/').post(saveStudents); // post, /api/students

module.exports = router;