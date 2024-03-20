const { Router } = require('express');
const dogsRouter = require('./dogs.js')
const temperamentsRouter = require('./temperament.js')

const router = Router();

router.use('/dogs', dogsRouter);
router.use('/temperament', temperamentsRouter);

module.exports = router;
