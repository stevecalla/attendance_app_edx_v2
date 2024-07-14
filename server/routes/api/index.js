const router = require('express').Router();

const authRoutes = require('./auth-routes.js');
const userIdRoutes = require('./userId-routes.js');
const studentRoutes = require('./student-routes.js');
const participantRoutes = require('./participant-routes.js');

router.use('/auth', authRoutes);
router.use('/user-id', userIdRoutes);
router.use('/students', studentRoutes);
router.use('/participants', participantRoutes);

const matchupRoutes = require('./matchup-routes');
const techRoutes = require('./tech-routes.js');
router.use('/matchup', matchupRoutes);
router.use('/tech', techRoutes);

module.exports = router;
