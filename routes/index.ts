import * as cors from 'cors';
const router = require('express').Router();
const votes = require('./votes');

router.use(cors());

router.use(votes);

export default router;