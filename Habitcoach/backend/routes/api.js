const express = require('express');
const router = express.Router();
const { getUser, saveHabit, getMotivation } = require('../controllers/userController');

router.get('/user', getUser);
router.post('/habit', saveHabit);
router.get('/motivation', getMotivation);

module.exports = router;
