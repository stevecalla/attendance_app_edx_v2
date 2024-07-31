const router = require('express').Router();

const {
  getParticipantsById,
  saveParticipants,
} = require('../../controllers/participants-controller');

router.route('/').get(getParticipantsById); // get, /api/participants
router.route('/').post(saveParticipants); // post, /api/participants

module.exports = router;