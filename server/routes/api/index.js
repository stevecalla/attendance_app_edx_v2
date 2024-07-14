const router = require('express').Router();
const matchupRoutes = require('./matchup-routes');
const techRoutes = require('./tech-routes.js');

const studentRoutes = require('./student-routes.js');
router.use('/students', studentRoutes);

const userIdRoutes = require('./userId-routes.js');
router.use('/user-id', userIdRoutes);

const authRoutes = require('./auth-routes.js');
router.use('/auth', authRoutes);

router.use('/matchup', matchupRoutes);
router.use('/tech', techRoutes);

module.exports = router;
